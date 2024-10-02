import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header/page'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth ">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head> 
      
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
