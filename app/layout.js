import "./globals.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

export default function RootLayout({children  }) {
  return (
    <html
      lang="en"
    >
      <body>
        <Header/>
        <main>{children }</main>
        <Footer/>
      </body>
    </html>
  );
}
