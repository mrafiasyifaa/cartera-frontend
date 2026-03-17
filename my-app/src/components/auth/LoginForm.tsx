"use client"

import React, {useState} from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import Link from 'next/link'
import { loginSchema, LoginFormValues } from '@/lib/validations/auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const {register, handleSubmit, formState: {errors, isSubmitting},}= useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async(data: LoginFormValues)=>{
    setServerError(null);
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data),
        credentials: 'include',
      })

      if(!res.ok){
        setServerError('Email atau password salah')
        return
      }
      
      router.push('/dashboard')
    }catch(error){
      //HAPUS WAKTU PRODUCTION
      console.error('Login error:', error);
      setServerError('Terjadi kesalahan saat login. Silahkan coba lagi.');
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>Access your wallet securely</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {serverError && (
            <div role="alert" className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
              {serverError}
            </div>
          )}
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email</label>
            <input className='border rounded-md border-cassiterite-brown p-2 focus:border-black-slug'
            type='email'
            id='email' 
            placeholder='hello@example.com'
            autoComplete='email'
            aria-describedby={errors.email? `email-error` : undefined}
            {...register('email')}/>
            {errors.email && (
              <p id='email-error' role='alert' className='text-sm text-red-500'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password'>Password</label>
            <input
            className='border rounded-md border-cassiterite-brown rounded-p-2 focus:border-black-slug'
            type='password'
            name='password'
            id='password'
            placeholder='********'
            required
            autoComplete='current-password'></input>

            <Link href="/forgot-password" className="flex justify-end text-sm items-end text-black-slug hover:text-chill-con-carne hoverEffect">Lupa Password?</Link>
          </div>

          <button
          type="submit"
          disabled={isSubmitting} 
        
          className={`rounded-md w-full mt-8 bg-black-slug text-white p-2 rounded-p-2 hover:bg-chill-con-carne hoverEffect ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black'}`}>{isSubmitting? 'Memasukkan data Anda...' : 'Sign In'}</button>
        </form>
      </CardContent>

      <CardFooter>
        Belum punya akun? <Link href="/register" className="text-black-slug hover:text-chill-con-carne hoverEffect"> Daftar sekarang!</Link>
      </CardFooter>
    </Card>
  )
}

export default LoginForm