"use server";
import { signIn, signOut } from "@/auth";

export const handleSignOut = async () => {
    console.log('signed out');
  await signOut({redirectTo: '/signin'});
  
}

export const handleSignIn = async () => {
  await signIn("github", { redirectTo: "/" });
};
