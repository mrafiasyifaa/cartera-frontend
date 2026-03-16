import React from 'react'
import {SubTitle} from '@/components/ui/text'
import Logo from '@/components/Logo'
import Container from '@/components/Container'
import LoginForm from '@/components/auth/LoginForm'

function LandingPage() {
  return (
    <Container>
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Logo/>
      <SubTitle className="mb-8">Your Personal Digital Wallet with Blockchain</SubTitle>
      <div className="flex flex-row gap-4 ">
        <LoginForm/>
      </div>
    </div>
    </Container>
  )
}

export default LandingPage
