import { handleSignOut } from '@/actions/auth-actions';
import { Button } from '@/components/ui/button'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DoorOpen } from 'lucide-react';
import React from 'react'

export default function SignOutButton() {

    return (
        <Button  onClick={handleSignOut} className='self-start cursor-pointer w-full ' variant={'destructive'}><DoorOpen /> Sign out</Button>
    )
}
