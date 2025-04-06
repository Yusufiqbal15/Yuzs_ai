import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets:["latin"]});



export const metadata: Metadata = {
  title: "Yuzs AI ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider appearance={{
      baseTheme:dark,
    }}>
    
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            <main className="min-h-screen"> {children}</main>
            <footer className="bg-muted/50 py-12">
              <div className=" container mx-auto text-center px-4 text-gray-200">
                
                <p> &copy;YUZS_AI❤️ 2025 All Right Reserve </p>
              </div>
            </footer>
          </ThemeProvider>

      </body>
    </html>
    </ClerkProvider>
    
  );
}
