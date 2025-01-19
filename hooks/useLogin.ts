'use client'

import { login } from '@/app/supabase/auth'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

export const useLogin = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const user = data.data.user
      if (user) {
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
