import { signInWithGoogle } from '@/actions/auth-actions'
import { Button } from '@/components/ui/button'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function SinginWithGoogleButton() {
  return (
    <Button onClick={signInWithGoogle} variant={'outline'} className='w-full'><Image src={'../../Symbol.svg'} width={17} height={17} alt=''></Image> Continue with Google</Button>
  )
}
