import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, LayoutDashboard, StarIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

const Header = () => {
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between' >
       <Link href="/">
          <Image 
            src={"/logo.png"}
            alt="Yuzsai Logo"
            height={200}
            width={1000}
            className="h-12 py-1 w-auto object-contain logoimg"
          />
        </Link>

        <div className=' flex text-center space-x-2 '>
        <SignedIn>
            <Link href={""}>
            <Button>
            <LayoutDashboard className=' h-4 w-4'/>
            <span className='hidden md:block'>Industry dashboard</span>
              
            
            </Button>
            </Link>
          </SignedIn>

          <DropdownMenu>
  <DropdownMenuTrigger>
    <Button>
    <StarIcon className=' h-4 w-4'/>
    <span className='hidden md:block'>Growth Tools</span>
    <ChevronDown className=' h-4 w-4 '/>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          
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
