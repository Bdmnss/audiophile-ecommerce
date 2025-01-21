import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useUserStore } from '@/stores/userStore'
import { Database } from '@/app/supabase/supabase.types'

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const useCheckSession = () => {
  const setUser = useUserStore((state) => state.setUser)
  const [sessionChecked, setSessionChecked] = useState(false)

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
      setSessionChecked(true)
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
      setSessionChecked(true)
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [setUser])

  return sessionChecked
}

export default useCheckSession
