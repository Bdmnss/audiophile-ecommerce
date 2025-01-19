'use client'

import { Database } from '@/app/supabase/supabase.types'
import { createClient } from '@supabase/supabase-js'
import { useUserStore } from '@/stores/userStore'
import { useEffect } from 'react'

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function CheckSession() {
  const setUser = useUserStore((state) => state.setUser)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        const user = {
          id: session.user.id,
          app_metadata: session.user.app_metadata,
          user_metadata: session.user.user_metadata,
          aud: session.user.aud,
          created_at: session.user.created_at,
        }
        setUser(user)
      } else {
        setUser(null)
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        const user = {
          id: session.user.id,
          app_metadata: session.user.app_metadata,
          user_metadata: session.user.user_metadata,
          aud: session.user.aud,
          created_at: session.user.created_at,
        }
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [setUser])

  return null
}
