"use client"
import { LoginPage } from "@/components/LoginPage";
import { SessionProvider } from "next-auth/react";

export default function Page () {
    return (
        <SessionProvider>
            <LoginPage/>
        </SessionProvider>
        
    );
}