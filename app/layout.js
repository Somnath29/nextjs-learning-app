import "./globals.css";

// path alias -> @ - root path
import NavBar from "./components/NavBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Head from "next/head";

export default function RootLayout({children  }) {
  return (
    <html
      lang="en"
    >
      <body>
        <h1>Main Dashboard</h1>
        <Header/>
        <main>{children }</main>
        <Footer/>
      </body>
    </html>
  );
}
