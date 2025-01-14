'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import i18nConfig from '@/i18nConfig'
import { useState } from 'react'
import { FaGlobe } from 'react-icons/fa'

export default function LanguageChanger() {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleChange = (newLocale) => {
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = date.toUTCString()
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
    setDropdownOpen(false)
  }

  const options = [
    { value: 'en', label: 'English' },
    { value: 'ka', label: 'Georgian' },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-2 text-white hover:text-[#d87d4a]"
      >
        <FaGlobe size={20} />
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded bg-black text-white shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleChange(option.value)}
              className="block w-full cursor-pointer px-4 py-2 text-left hover:bg-[#d87d4a] hover:text-white"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
