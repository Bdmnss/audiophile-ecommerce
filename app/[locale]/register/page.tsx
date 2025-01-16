import Register from './client'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function RegisterPage() {
  const supabase = await createClient()

  const { data } = await supabase.auth.getUser()
  if (data?.user) {
    redirect('/')
  }

  return <Register />
}
