'use client'

import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logoB from "./public/img/logo_b.png"
import { user } from "./repository/user"
import bcrypt from 'bcryptjs';

export default function Home() {
  const [isLogged,setIsLogged] = useState(false);
  const [badLogin,setBadLogin] = useState(false);
  const [userField,setUserField] = useState('');
  const [passField,setPassField] = useState('');
  //const router = useRouter();

  function handleClick() {
    const pwdok = bcrypt.compareSync(passField,user.passeword)
    if (user.username === userField && pwdok) setIsLogged(true)
    else setBadLogin(true)
  }


  if (!isLogged)
    return (
    <>
      <div className="grid h-screen place-items-center bg-black">
        <div className="grid p-14 w-full max-w-4xl gap-2 bg-zinc-200/90 rounded-3xl">
          <Image src={logoB} alt="le_logo"/>
          <Label htmlFor="usr">Username</Label>
          <Input id="usr" className="border-none bg-white max-h-5 resize-none" placeholder="Type your username here." onChange={e => setUserField(e.target.value)}/>
          <Label htmlFor="pwd">Password</Label>
          <Input id="pwd" className="border-none bg-white max-h-5 resize-none" placeholder="Type your password here." onChange={e => setPassField(e.target.value)}/>
          <Button onClick={handleClick} >Login</Button>
          {badLogin && (<p className= "text-red-600"> Wrong password and/or login, retry please</p>)}
        </div>
        
      </div>

    </>
  );  
  else
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>🎬 Cinetica</div>
        <nav style={styles.nav}>
          <div style={styles.navSection}>
            <h3 style={styles.sectionTitle}>Films</h3>
            <ul style={styles.navList}>
              <Button>🎥 À l affiche</Button>
              <Button>🌟 Populaires</Button>
              <Button>⭐ Les mieux notés</Button>
            </ul>
          </div>
          <div style={styles.navSection}>
            <h3 style={styles.sectionTitle}>Séries TV</h3>
            <ul style={styles.navList}>
              <Button>📺 En diffusion</Button>
              <Button>🌟 Populaires</Button>
              <Button>⭐ Les mieux notées</Button>
            </ul>
          </div>
        </nav>
      </aside>
      <main style={styles.content}>
        <h1>Coding in progress...</h1>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  nav: {
    marginTop: "20px",
  },
  navSection: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff",
  },
};
    //router.push('./home')


