'use client'

import { register } from '@/app/supabase/auth'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

export const useRegister = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      router.push('/login')
    },
    onError: (error) => {
      console.error('Registration failed:', error)
    },
  })
}
