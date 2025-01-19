'use client'

import { logout } from '@/app/supabase/auth'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/stores/userStore'

export const useLogout = () => {
  const router = useRouter()
  const setUser = useUserStore((state) => state.setUser)

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem('user')
      setUser(null)
      router.push('/login')
    },
    onError: (error) => {
      console.error('Logout failed:', error)
    },
  })
}
