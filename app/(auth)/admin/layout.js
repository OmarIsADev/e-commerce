'use client';
import Provider from "@/app/_comps/provider";
import '@/app/_css/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
