'use client'

import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/stores/userStore'
import { useProfile } from '@/hooks/useProfile'
import { Card, Descriptions, Alert, Button, Form, Input, Modal } from 'antd'
import { useThemeStore } from '@/stores/themeStore'
import type { Profile } from '@/hooks/useProfile'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Profile() {
  const user = useUserStore((state) => state.user)
  const { data: profile, isLoading, error, updateProfile } = useProfile()
  const { theme } = useThemeStore()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const route = useRouter()
  const { t } = useTranslation()

  useEffect(() => {
    const delay = setTimeout(() => {
      if (user === null) {
        route.push('/login')
      }
    }, 1000)

    return () => clearTimeout(delay)
  }, [route, user])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = (values: Partial<Profile>) => {
    updateProfile(values)
    setIsModalVisible(false)
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }
  if (error) {
    return (
      <Alert
        message="Error"
        description={error.message}
        type="error"
        showIcon
      />
    )
  }

  return (
    <div
      className={`flex min-h-screen w-full items-center justify-center p-5 ${
        theme === 'dark' ? 'bg-[#101010] text-white' : 'bg-[#f1f1f1] text-black'
      }`}
      style={{
        marginTop: '50px',
      }}
    >
      <Card
        title={
          <span style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>
            {t('profile')}
          </span>
        }
        bordered={false}
        style={{
          backgroundColor: theme === 'dark' ? '#1f1f1f' : '#ffffff',
          color: theme === 'dark' ? '#ffffff' : '#000000',
        }}
        className="w-full lg:w-1/2"
      >
        {profile && (
          <>
            <Descriptions
              bordered
              column={1}
              styles={{
                label: { color: theme === 'dark' ? '#ffffff' : '#000000' },
                content: { color: theme === 'dark' ? '#ffffff' : '#000000' },
              }}
            >
              <Descriptions.Item label={t('name')}>
                {profile.full_name || t('not_entered')}
              </Descriptions.Item>
              <Descriptions.Item label={t('email')}>
                {profile.email || t('not_entered')}
              </Descriptions.Item>
              <Descriptions.Item label={t('phone')}>
                {profile.phone || t('not_entered')}
              </Descriptions.Item>
              <Descriptions.Item label={t('address')}>
                {profile.address || t('not_entered')}
              </Descriptions.Item>
              <Descriptions.Item label={t('city')}>
                {profile.city || t('not_entered')}
              </Descriptions.Item>
              <Descriptions.Item label={t('country')}>
                {profile.country || t('not_entered')}
              </Descriptions.Item>
              <Descriptions.Item label="ZIP">
                {profile.zip || t('not_entered')}
              </Descriptions.Item>
            </Descriptions>
            <Button type="primary" onClick={showModal} className="mt-4">
              {t('edit_profile')}
            </Button>
          </>
        )}

        <Modal
          title={t('edit_profile')}
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form layout="vertical" initialValues={profile} onFinish={onFinish}>
            <Form.Item name="full_name" label={t('name')}>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label={t('phone')}>
              <Input />
            </Form.Item>
            <Form.Item name="address" label={t('address')}>
              <Input />
            </Form.Item>
            <Form.Item name="city" label={t('city')}>
              <Input />
            </Form.Item>
            <Form.Item name="country" label={t('country')}>
              <Input />
            </Form.Item>
            <Form.Item name="zip" label="ZIP">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {t('save')}
              </Button>
              <Button type="default" onClick={handleCancel} className="ml-2">
                {t('cancel')}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  )
}
