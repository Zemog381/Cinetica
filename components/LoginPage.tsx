"use client"

import Image from "next/image"
import { SessionProvider, signIn, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logoB from "@/app/public/img/logo_b.png"
import { useState } from "react"





export const LoginPage = () => {
    const [badLogin,setBadLogin] = useState(false);
    const [userField,setUserField] = useState('');
    const [passField,setPassField] = useState('');
    const {data : session, status, update} = useSession();
    return (
        <div className="grid h-screen place-items-center bg-black">
          <div className="grid p-14 w-full max-w-4xl gap-2 bg-zinc-200/90 rounded-3xl">
            <Image src={logoB} alt="le_logo"/>
            <Label htmlFor="usr">Username</Label>
            <Input id="usr" className="border-none bg-white max-h-5 resize-none" placeholder="Type your username here." onChange={e => setUserField(e.target.value)}/>
            <Label htmlFor="pwd">Password</Label>
            <Input id="pwd" type="password" className="border-none bg-white max-h-5 resize-none" placeholder="Type your password here." onChange={e => setPassField(e.target.value)}/>
            <Button onClick={handleClick} >Login</Button>
            <p> {JSON.stringify(session)} </p>
          </div>
        </div>
  
    );

    async function handleClick() {
        const res = await signIn("credentials",{username : userField, password : passField, callbackUrl:'/home'});
        console.log(res)
    }
}