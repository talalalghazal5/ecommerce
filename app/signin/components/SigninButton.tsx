'use client'
import { handleSignIn } from '@/actions/auth-actions'
import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SigninButton() {
  return (
    <Button onClick={handleSignIn}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Continue with GitHub</Button>
  )
}
