'use client'

import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/app/supabase'
import { useUserStore } from '@/stores/userStore'

const fetchProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const useProfile = () => {
  const user = useUserStore((state) => state.user)

  return useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      const profile = await fetchProfile(user!.id)
      return { ...profile, email: user!.email }
    },
    enabled: !!user?.id,
  })
}
