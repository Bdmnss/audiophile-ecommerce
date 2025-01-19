import { User } from '@supabase/supabase-js'
import { create } from 'zustand'

interface UserStore {
  user: User | null
  setUser: (user: User | null) => void
  setUserFromLocalStorage: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  setUserFromLocalStorage: () => {
    const userString = localStorage.getItem('user')
    if (userString) {
      const user = JSON.parse(userString)
      set({ user })
    }
  },
}))
