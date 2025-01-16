'use client'

import { User } from '@supabase/supabase-js'
import { useTranslation } from 'react-i18next'

interface ProfileProps {
  user: User
}

export default function Profile({ user }: ProfileProps) {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#d87d4a]">
          {t('profile')}
        </h1>
        <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-[#101010]">
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <strong>{t('email')}:</strong> {user.email}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <strong>{t('created_at')}:</strong>{' '}
              {new Date(user.created_at).toLocaleDateString()}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <strong>{t('last_sign_in')}:</strong>{' '}
              {user.last_sign_in_at
                ? new Date(user.last_sign_in_at).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
