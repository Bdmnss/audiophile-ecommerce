'use client'

import useSWR from 'swr'
import { supabase } from '@/app/supabase'
import { useUserStore } from '@/stores/userStore'

interface User {
  id: string
  full_name: string | null
  email: string | null
  phone: string | null
  address: string | null
  city: string | null
  country: string | null
  zip: string | null
  updated_at: string | null
}

const fetchUser = async (id: string) => {
  if (!id) throw new Error('User ID is undefined')
  const { data, error } = await supabase.auth.admin.getUserById(id)
  if (error) throw new Error(error.message)
  const user = {
    id: data.user.id,
    full_name: data.user?.user_metadata?.full_name || 'none',
    email: data.user?.email || 'none',
    phone: data.user?.user_metadata?.phone || 'none',
    address: data.user?.user_metadata?.address || 'none',
    city: data.user?.user_metadata?.city || 'none',
    country: data.user?.user_metadata?.country || 'none',
    zip: data.user?.user_metadata?.zip || 'none',
    updated_at: data.user.updated_at ?? null,
  } as User
  return user
}

export const useFetchUser = (id: string | undefined) => {
  const setUser = useUserStore((state) => state.setUser)

  const { data, error, isLoading } = useSWR(id ? ['user', id] : null, () =>
    fetchUser(id!)
  )

  if (data) {
    setUser(data)
  }

  return { data, error, isLoading }
}
