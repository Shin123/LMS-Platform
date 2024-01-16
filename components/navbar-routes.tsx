'use client'

import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarRoutes = () => {
  const pathName = usePathname()

  const isTeacherPage = pathName?.startsWith('/teacher')
  const isPlayerPage = pathName?.includes('/chapter')

  return (
    <div className='flex gap-x-2 ml-auto'>
      {isTeacherPage || isPlayerPage ? (
        <Link href='/'>
          <Button size='sm' variant='ghost'>
            <LogOut className='h-4 w-4 mr-2' />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href='/teacher/courses'>
          <Button size='sm' variant='ghost'>
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default NavbarRoutes
