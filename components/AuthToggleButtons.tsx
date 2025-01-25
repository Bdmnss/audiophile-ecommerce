'use client'

import Link from 'next/link'
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
    <div className="flex">
      <Link
        href="/login"
        className={`w-1/2 rounded-l p-3 text-[1.5rem] ${isLoginPath ? 'bg-[#d87d4a] text-white' : 'bg-gray-200 text-black'}`}
      >
        {t('login')}
      </Link>
      <Link
        href={`/register`}
        className={`w-1/2 rounded-r p-3 text-[1.5rem] ${isRegisterPath ? 'bg-[#d87d4a] text-white' : 'bg-gray-200 text-black'}`}
      >
        {t('register')}
      </Link>
    </div>
  )
}
