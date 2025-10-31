import { handleSignOut } from '@/actions/auth-actions';
import { signOut } from '@/auth';
import { Button } from '@/components/ui/button'
import React from 'react'

export default function SignOutButton() {

    return (
        <Button  onClick={handleSignOut}>Sign out</Button>
    )
}
