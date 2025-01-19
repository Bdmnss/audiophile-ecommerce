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
        const appUser = {
          id: user.id,
          email: user.email ?? null,
          full_name: user.user_metadata.full_name,
          address: user.user_metadata.address,
          city: user.user_metadata.city,
          country: user.user_metadata.country,
          zip: user.user_metadata.zip,
          phone: user.user_metadata.phone,
          updated_at: user.updated_at ?? null,
        }
        setUser(appUser)
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
