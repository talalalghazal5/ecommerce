import { signInWithGoogle } from '@/actions/auth-actions'
import { Button } from '@/components/ui/button'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SinginWithGoogleButton() {
  return (
    <Button onClick={signInWithGoogle}><FontAwesomeIcon icon={faGoogle} /> Continue with Google</Button>
  )
}
