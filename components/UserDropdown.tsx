'use client'

import { useState, useEffect, useRef } from 'react'
import { FaUser, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { logout } from '@/app/[locale]/logout/actions'
import { User } from '@supabase/supabase-js'
import { useTranslation } from 'react-i18next'

interface UserDropdownProps {
  user: User | null
}

export default function UserDropdown({ user }: UserDropdownProps) {
  const { t } = useTranslation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const toggleDropdown = () => {
    if (!user) {
      router.push('/login')
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
            className="flex items-center p-2 hover:bg-[#d87d4a]"
          >
            <FaUserCircle className="mr-2" />
            {t('profile')}
          </Link>
          <button
            onClick={() => logout()}
            className="flex w-full items-center p-2 hover:bg-[#d87d4a]"
          >
            <FaSignOutAlt className="mr-2" />
            {t('logout')}
          </button>
        </div>
      )}
    </div>
  )
}
