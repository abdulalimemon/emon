import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Alim Emon - Front End MERN Developer",
  description: "I'm Abdul Alim Emon, a front-end web developer from Bangladesh. I love coding and exploring new technologies, always eager to bring creative web projects to life.",
  keywords: "Abdul Alim, Abdul Alim Emon, Emon, Front-end Developer, MERN Developer, Web Developer, React Developer, Next.js Developer, আব্দুল আলিম ইমন",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
