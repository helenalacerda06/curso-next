import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
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


export default function Home() {
  return (
    <div>
      <h1>Pagina HOME</h1>
    </div>
  )
}