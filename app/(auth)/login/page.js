"use client"
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/app/_libs/firebase";


const auth = getAuth(app);
const inputStyle = {label: ["!text-white/60"],input: ["bg-transperent", "text-white/90", "placeholder:text-white/60"]}

export default function Page() {
  const [data, setData] = React.useState({email: "", password: ""})
  const signIn = () => {
    signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
      window.location.href = "/admin"
    })
  }
  return (
    <div className="flex flex-col justify-center h-screen w-screen items-center p-10 bg-zinc-800 text-white gap-4">
        <h1>Login</h1>
        <Input type="email" label="Email" variant="underlined" color="success" classNames={inputStyle} onChange={(e) => setData({...data, email: e.target.value})} />
        <Input type="password" label="password" variant="underlined" color="success" classNames={inputStyle} onChange={(e) => setData({...data, password: e.target.value})} />
        <Button color="success" variant="ghost" onClick={signIn}>Login in</Button>
    </div>
  );
}
