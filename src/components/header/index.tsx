import Link from "next/link";

export function Header() {
    return (
        <header>
            <div>
                <div>
                    NextJS
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/posts'>
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}