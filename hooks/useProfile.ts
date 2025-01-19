import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/app/supabase'
import { useUserStore } from '@/stores/userStore'

export interface Profile {
  id: string
  full_name: string | null
  phone: string | null
  address: string | null
  city: string | null
  country: string | null
  zip: string | null
  updated_at: string | null
}

const fetchProfile = async (userId: string): Promise<Profile> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('Profile not found')
  }

  return data
}

const updateProfile = async (
  userId: string,
  profileData: Partial<Profile>
): Promise<Profile> => {
  const { data, error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('id', userId)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('Failed to update profile')
  }

  return data
}

export const useProfile = () => {
  const user = useUserStore((state) => state.user)
  const queryClient = useQueryClient()

  const profileQuery = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      const profile = await fetchProfile(user!.id)
      return { ...profile, email: user!.user_metadata.email }
    },
    enabled: !!user?.id,
  })

  const profileMutation = useMutation({
    mutationFn: (profileData: Partial<Profile>) =>
      updateProfile(user!.id, profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', user?.id] })
    },
  })

  return { ...profileQuery, updateProfile: profileMutation.mutate }
}
