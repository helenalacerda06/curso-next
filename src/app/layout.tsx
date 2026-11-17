import "./globals.css";
import { Header } from '../components/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aula Next JS do zero!',
  description: 'Aula Next JS do zero com o Sujeito Programador!',
  openGraph:{
    title: 'Aprendendo Next JS com Sujeito No YouTube!',
    description: 'Aprendendo Next JS do zero com Sujeito Programador!'
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
