'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/Input'

interface JoinFormData {
  firstName: string
  lastName: string
  email: string
}

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinFormData>()

  const onSubmit = (_data: JoinFormData) => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center space-y-4">
        <h3 className="font-serif text-3xl font-bold text-white">You&apos;re in the movement.</h3>
        <p className="text-white/80">Check your inbox for next steps.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="First Name"
          {...register('firstName', { required: 'Required' })}
          error={errors.firstName?.message}
        />
        <Input
          placeholder="Last Name"
          {...register('lastName', { required: 'Required' })}
          error={errors.lastName?.message}
        />
      </div>
      <Input
        type="email"
        placeholder="Email address"
        {...register('email', {
          required: 'Required',
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
        })}
        error={errors.email?.message}
      />
      <button
        type="submit"
        className="w-full bg-white text-brand-red font-semibold py-3 px-8 rounded-md transition-all duration-300 hover:bg-gray-100"
      >
        Join the Movement
      </button>
      <p className="text-white/60 text-xs text-center">
        No spam. Ever. Unsubscribe any time.
      </p>
    </form>
  )
}
