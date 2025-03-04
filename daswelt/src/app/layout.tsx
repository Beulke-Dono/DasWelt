import "./globals.css"
import { Header} from "../components/header"
import { Metadata } from "next"
import { Poppins } from "next/font/google"
import Footer from "@/components/footer"

const poppins = Poppins ({
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: "Home - DasWelt",
  description: "Importações e Exportações",
  openGraph:{
    title: "Importação ou Exportação",
    description: "Importações e Exportações",
    images: [] //CLOLOCAR IMAGEM QUE APARECE NO LINK
  },
  robots:{
    index: true,
    follow: true,
    nocache: true
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header/>

        {children}
        
        <Footer/>
      </body>
    </html>
  );
}
