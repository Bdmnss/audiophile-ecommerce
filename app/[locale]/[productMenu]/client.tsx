'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Modal, Form, Input, Select, Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useProducts } from '@/hooks/useProduct'
import { uploadImage } from '@/hooks/useImageUpload'
import { useUserStore } from '@/stores/userStore'

export default function ProductMenu({
  productMenuName,
}: {
  productMenuName: string
}) {
  const { t } = useTranslation()
  const { data: products, isLoading, error, addProduct } = useProducts()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [form] = Form.useForm()
  const [filteredProducts, setFilteredProducts] = useState<
    {
      category: string | null
      created_at: string
      description: string | null
      features: string | null
      id: number
      image: string | null
      name: string | null
      new: boolean | null
      price: number | null
      slug: string | null
    }[]
  >([])
  const user = useUserStore((state) => state.user)

  useEffect(() => {
    if (products) {
      const filtered = products.filter(
        (product) => product.category === productMenuName
      )
      setFilteredProducts(filtered)
    }
  }, [products, productMenuName])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
    setFile(null)
  }

  const handleUpload = async () => {
    if (!file) {
      message.error('Please select a file to upload')
      return
    }

    try {
      const imageUrl = await uploadImage(file)
      message.success('Image uploaded successfully')
      return imageUrl
    } catch (error) {
      message.error('Failed to upload image')
    }
  }

  const onFinish = async (values: any) => {
    const imageUrl = await handleUpload()
    if (imageUrl) {
      addProduct({ ...values, image: imageUrl })
      setIsModalVisible(false)
      form.resetFields()
      setFile(null)
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="bg-[#f1f1f1] pb-[12rem] dark:bg-[#101010]">
      <div className="flex items-center justify-center bg-black pb-[3.2rem] pt-[11rem] md:pb-[7.2rem] md:pt-[15rem]">
        <h1 className="text-[2.8rem] font-bold text-white md:text-[4rem]">
          {t(productMenuName)?.toString().toUpperCase()}
        </h1>
      </div>
      <div className="px-[2.4rem] md:px-[4rem] lg:px-[16.5rem]">
        {user && (
          <Button type="primary" onClick={showModal} className="mb-4">
            {t('add_product')}
          </Button>
        )}
        {filteredProducts.map((item, index) => (
          <div
            key={item.id}
            className={`my-[6.5rem] flex flex-col items-center justify-center text-center lg:mb-[16rem] lg:flex-row lg:justify-between ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:w-[50%]">
              <Image
                src={item.image || '/path/to/default/image.jpg'}
                alt="product image"
                className="mb-[3.2rem] rounded-lg md:hidden"
                width={375}
                height={375}
              />
              <Image
                src={item.image || '/path/to/default/image.jpg'}
                alt="product image"
                className="mb-[3.2rem] hidden h-[35rem] rounded-lg md:block lg:hidden"
                width={768}
                height={768}
              />
              <Image
                src={item.image || '/path/to/default/image.jpg'}
                alt="product image"
                className="hidden rounded-lg lg:block"
                width={768}
                height={768}
              />
            </div>
            <div className="lg:w-[40%]">
              <h2 className="mb-[2.4rem] text-[2.4rem] font-bold text-black dark:text-white md:text-[3.2rem]">
                {item.name}
              </h2>
              <p className="mb-[2.4rem] text-[1.5rem] text-[gray] dark:text-gray-400">
                {item.description}
              </p>
              <Link href={`/${productMenuName}/${item.slug}`}>
                <button className="bg-[#d87d4a] px-[2.4rem] py-[1.2rem] text-[1.3rem] font-bold text-white hover:bg-[#fbaf85]">
                  {t('see_product')}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title={t('add_product')}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="name" label={t('name')} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label={t('category')}
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="earphones">Earphones</Select.Option>
              <Select.Option value="headphones">Headphones</Select.Option>
              <Select.Option value="speakers">Speakers</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="description"
            label={t('description')}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="features"
            label={t('features')}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="new" label={t('new')} valuePropName="checked">
            <Input type="checkbox" />
          </Form.Item>
          <Form.Item
            name="price"
            label={t('price')}
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="slug" label="Slug" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label={t('image')}>
            <Upload
              beforeUpload={(file) => {
                setFile(file)
                return false
              }}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>{t('select_image')}</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t('add_product')}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
