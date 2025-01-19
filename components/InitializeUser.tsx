'use client'

import { useEffect } from 'react'
import { useUserStore } from '@/stores/userStore'

const InitializeUser = () => {
  const setUserFromLocalStorage = useUserStore(
    (state) => state.setUserFromLocalStorage
  )

  useEffect(() => {
    setUserFromLocalStorage()
  }, [setUserFromLocalStorage])

  return null
}

export default InitializeUser
