import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import Link from 'next/link'

function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>Access your wallet securely</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email</label>
            <input className='border rounded-md border-cassiterite-brown rounded-p-2 focus-within:border-black-slug'
            type='email'
            name='email'
            id='email' 
            placeholder='hello@example.com'
            required></input>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password'>Password</label>
            <input
            className='border rounded-md border-cassiterite-brown rounded-p-2 focus-within:border-black-slug'
            type='password'
            name='password'
            id='password'
            placeholder='********'
            required></input>

            <Link href="/forgot-password" className="flex justify-end text-sm items-end text-black-slug hover:text-chill-con-carne hoverEffect">Lupa Password?</Link>
          </div>

          <button className='rounded-md w-full mt-8 bg-black-slug text-white p-2 rounded-p-2 hover:bg-chill-con-carne hoverEffect'>Sign In</button>
        </form>
      </CardContent>

      <CardFooter>
        Belum punya akun? <Link href="/register" className="text-black-slug hover:text-chill-con-carne hoverEffect"> Daftar sekarang!</Link>
      </CardFooter>
    </Card>
  )
}

export default LoginForm