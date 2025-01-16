'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function AuthToggleButtons() {
  const router = useRouter()
  const pathname = usePathname()
  const { i18n, t } = useTranslation()
  const currentLocale = i18n.language

  const isLoginPath =
    pathname === '/login' || pathname === `/${currentLocale}/login`
  const isRegisterPath =
    pathname === '/register' || pathname === `/${currentLocale}/register`

  return (
    <div className="mb-4 flex">
      <button
        onClick={() => router.push('/login')}
        className={`w-1/2 rounded-l p-2 ${isLoginPath ? 'bg-[#d87d4a] text-white' : 'bg-gray-200 text-black'}`}
      >
        {t('login')}
      </button>
      <button
        onClick={() => router.push('/register')}
        className={`w-1/2 rounded-r p-2 ${isRegisterPath ? 'bg-[#d87d4a] text-white' : 'bg-gray-200 text-black'}`}
      >
        {t('register')}
      </button>
    </div>
  )
}
