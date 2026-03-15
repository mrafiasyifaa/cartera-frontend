import React from 'react'
import {Title} from '@/components/ui/text'
import Logo from '@/components/Logo'
import NavButton from '@/components/ui/button'

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Logo/>
      <Title>Your Digital Wallet with Blockchain</Title>
      <div className="flex flex-row gap-4 ">
        <NavButton href="/login">Login</NavButton>
        <NavButton href="/register">Register</NavButton>
      </div>
    </div>
  )
}

export default LandingPage
