import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'

const Header = () => {
  return (
    <header >
      <nav>
       <Link href="/">
          <Image 
            src={"/logo.png"}
            alt="Yuzsai Logo"
            height={10}
            width={1000}
            className="h-12 py-1 w-auto object-contain logoimg"
          />
        </Link>
        <div>
          <SignedIn>
            <Link href={"/dashboard"}>
            <Button>
              <LayoutDashboard className=' ml-8 h-4 w-4'/>
              Industry dashboard
            
            </Button>
            </Link>
          </SignedIn>
        </div>
        </nav>

          <SignedOut>
          <SignInButton />
          <SignUpButton />
          </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
  
    </header>
  )
}

export default Header
