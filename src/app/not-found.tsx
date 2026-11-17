import Link from 'next/link';
import './not-found.css'

export default function NotFound() {
    return (
        <div className='pagNaoExiste'>
            <h1>Página 404 não encontrada!</h1>
            <p>Essa página que tentou acessar não existe!</p>
            <Link href='/'>
                Voltar para a Home
            </Link>
        </div>
    )
}