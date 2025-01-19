'use client'

import React, { useEffect } from 'react'
import { useUserStore } from '@/stores/userStore'
import { useProfile } from '@/hooks/useProfile'
import { Card, Descriptions, Spin, Alert } from 'antd'
import { useThemeStore } from '@/stores/themeStore'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const user = useUserStore((state) => state.user)
  const { data: profile, isLoading, error } = useProfile()
  const { theme } = useThemeStore()
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      router.push('/login')
    }
  }, [router, user])

  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="loader"></div>
      </div>
    )

  if (error)
    return (
      <Alert
        message="Error"
        description={error.message}
        type="error"
        showIcon
      />
    )

  return (
    <div
      className="profileContainer"
      style={{
        backgroundColor: theme === 'dark' ? '#101010' : '#f1f1f1',
        color: theme === 'dark' ? '#ffffff' : '#000000',
      }}
    >
      <Card
        title={
          <span style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>
            Profile
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
          <Descriptions
            bordered
            column={1}
            styles={{
              label: { color: theme === 'dark' ? '#ffffff' : '#000000' },
              content: { color: theme === 'dark' ? '#ffffff' : '#000000' },
            }}
          >
            <Descriptions.Item label="Name">
              {profile.full_name || 'Not entered'}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {profile.email || 'Not entered'}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
              {profile.phone || 'Not entered'}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {profile.address || 'Not entered'}
            </Descriptions.Item>
            <Descriptions.Item label="City">
              {profile.city || 'Not entered'}
            </Descriptions.Item>
            <Descriptions.Item label="Country">
              {profile.country || 'Not entered'}
            </Descriptions.Item>
            <Descriptions.Item label="ZIP">
              {profile.zip || 'Not entered'}
            </Descriptions.Item>
            <Descriptions.Item label="Updated At">
              {profile.updated_at || 'Not entered'}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Card>
    </div>
  )
}
