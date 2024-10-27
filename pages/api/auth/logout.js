import { signOut } from 'next-auth/react';

export default function LogoutPage() {
    signOut();
    return null;
}