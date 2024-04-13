'use client';
import Provider from "@/app/_comps/provider";
import { app } from "../../_libs/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react";
import '@/app/_css/globals.css';

const auth = getAuth(app);

export default function RootLayout({ children }) {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                window.location.href = '/login'
            }
        })
    },[auth])

  return (
    <html lang="en" dir="ltr">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
