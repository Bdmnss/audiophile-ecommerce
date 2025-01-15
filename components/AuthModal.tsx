'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useThemeStore } from '@/stores/themeStore'
import { FaTimes } from 'react-icons/fa'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

const signUpSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { theme } = useThemeStore()
  const [isSignUp, setIsSignUp] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isSignUp ? signUpSchema : signInSchema),
  })

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    if (isOpen) {
      newSearchParams.set('modal', 'auth')
    } else {
      newSearchParams.delete('modal')
    }
    router.push(`${pathname}?${newSearchParams.toString()}`)
  }, [isOpen, router, searchParams, pathname])

  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex size-full items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className={`relative flex w-[90%] flex-col rounded-lg p-8 shadow-lg sm:w-[80%] lg:w-[70%] 2xl:w-[50%] ${theme === 'dark' ? 'bg-[#101010] text-white' : 'bg-white text-black'}`}
      >
        <div className="mb-[3rem] flex items-center justify-between">
          <h2 className="text-[2rem] font-bold">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          <button onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="mb-4 block text-[1.5rem]">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full rounded border p-2 text-[1.3rem] text-black outline-none focus:border-transparent focus:ring-0"
            />

            {errors.email && (
              <p className="mt-2 text-[1.2rem] text-red-500">
                {errors.email?.message?.toString()}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="mb-4 block text-[1.5rem]">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className="w-full rounded border p-2 text-[1.3rem] text-black outline-none focus:border-transparent focus:ring-0"
            />

            {errors.password && (
              <p className="mt-2 text-[1.2rem] text-red-500">
                {errors?.password?.message?.toString()}
              </p>
            )}
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="mb-4 block text-[1.5rem]"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                className="w-full rounded border p-2 text-[1.3rem] text-black outline-none focus:border-transparent focus:ring-0"
              />
              {errors.confirmPassword && (
                <p className="mt-2 text-[1.2rem] text-red-500">
                  {errors?.confirmPassword?.message?.toString()}
                </p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded bg-[#d87d4a] p-[1rem] text-[1.2rem] text-white hover:bg-[#fbaf85]"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-center text-[1.2rem]">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#d87d4a] hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  )
}
