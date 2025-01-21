'use client'

import { useState, useEffect, useRef } from 'react'
import { FaUser, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { useLogout } from '@/hooks/useLogout'
import { useUserStore } from '@/stores/userStore'
import useCheckSession from '@/hooks/useCheckSession'

export default function UserDropdown() {
  const { t } = useTranslation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const user = useUserStore((state) => state.user)

  const sessionChecked = useCheckSession()

  const toggleDropdown = () => {
    if (sessionChecked && !user) {
      router.push('/login')
      setIsDropdownOpen(false)
    } else {
      setIsDropdownOpen((prev) => !prev)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false)
    }
  }

  const { mutate: handleLogout } = useLogout()

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <FaUser
        size={20}
        className="cursor-pointer text-white hover:text-[#d87d4a]"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded bg-[#101010] text-white shadow-lg">
          <Link
            href="/profile"
            className="flex items-center p-2 text-[1.3rem] hover:bg-[#d87d4a]"
            onClick={() => setIsDropdownOpen(false)}
          >
            <FaUserCircle className="mr-2" />
            {t('profile')}
          </Link>
          <button
            onClick={() => {
              handleLogout()
              setIsDropdownOpen(false)
            }}
            className="flex w-full items-center p-2 text-[1.3rem] hover:bg-[#d87d4a]"
          >
            <FaSignOutAlt className="mr-2" />
            {t('logout')}
          </button>
        </div>
      )}
    </div>
  )
}
