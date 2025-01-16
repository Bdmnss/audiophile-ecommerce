import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

const Profile = dynamic(() => import('./client'), { ssr: false })

export default async function ProfilePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <Profile user={data.user} />
}
