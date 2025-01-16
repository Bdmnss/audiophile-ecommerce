'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useThemeStore } from '@/stores/themeStore'
import { login } from './actions'
import AuthToggleButtons from '@/components/AuthToggleButtons'
import { useTranslation } from 'react-i18next'

const logInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export default function Login() {
  const { theme } = useThemeStore()
  const { t } = useTranslation()

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(logInSchema),
  })

  return (
    <div
      className={`flex size-full min-h-screen items-center justify-center ${theme === 'dark' ? 'bg-[#101010] text-white' : 'bg-white text-black'}`}
    >
      <div className="flex size-full flex-col gap-5 rounded-lg p-8 shadow-lg sm:w-[80%] md:w-[50%] lg:w-[30%]">
        <AuthToggleButtons />
        <h2 className="flex justify-center text-[2rem] font-bold">
          {t('login')}
        </h2>
        <form>
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
            formAction={login}
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
