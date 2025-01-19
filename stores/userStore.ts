import { create } from 'zustand'

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

interface UserStore {
  user: User | null
  setUser: (user: User) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))
