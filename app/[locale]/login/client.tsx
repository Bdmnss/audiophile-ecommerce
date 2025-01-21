'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useThemeStore } from '@/stores/themeStore'
import AuthToggleButtons from '@/components/AuthToggleButtons'
import { useTranslation } from 'react-i18next'
import { useLogin } from '@/hooks/useLogin'
import { useUserStore } from '@/stores/userStore'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useCheckSession from '@/hooks/useCheckSession'
import Loader from '@/components/Loader'

const logInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export default function Login() {
  const { theme } = useThemeStore()
  const { t } = useTranslation()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>({
    resolver: zodResolver(logInSchema),
  })

  const { mutate: handleLogin } = useLogin()

  const onSubmit = (data: { email: string; password: string }) => {
    handleLogin({ email: data.email, password: data.password })
  }

  const sessionChecked = useCheckSession()

  const user = useUserStore((state) => state.user)

  useEffect(() => {
    if (user && sessionChecked) {
      router.push('/')
    }
  }, [router, user, sessionChecked])

  if (!sessionChecked) return <Loader />

  return (
    <div
      className={`flex size-full min-h-screen items-center justify-center ${
        theme === 'dark' ? 'bg-[#101010] text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex size-full flex-col gap-5 rounded-lg p-8 shadow-lg sm:w-[80%] md:w-[50%] lg:w-[30%]">
        <AuthToggleButtons />
        <h2 className="flex justify-center text-[2rem] font-bold">
          {t('login')}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="mb-4 block text-[1.5rem]">
              {t('email')}
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full rounded border p-2 text-[1.3rem] text-black focus:outline-none"
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email.message.toString()}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="mb-2 block text-[1.5rem]">
              {t('password')}
            </label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className="w-full rounded border p-2 text-[1.3rem] text-black focus:outline-none"
            />
            {errors.password?.message && (
              <p className="text-red-500">
                {errors.password.message.toString()}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded bg-[#d87d4a] p-3 text-[1.5rem] text-white hover:bg-[#fbaf85]"
          >
            {t('login')}
          </button>
        </form>
      </div>
    </div>
  )
}
