'use client'

import { login } from '@/app/supabase/auth'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser)
  const router = useRouter()

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const user = data.data.user
      if (user) {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
        router.push('/')
      } else {
        console.error('User is null')
      }
    },
    onError: (error) => {
      console.error('Login failed:', error)
    },
  })
}
