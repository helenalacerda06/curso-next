import './page.css';
import Link from "next/link";

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[]
}

export default async function PostsPage() {

    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json()

    async function handleFetchPosts() {
        'use server'
        console.log("Clicou")
    }


    console.log(data.posts)

    async function handleSearchUser(formData: FormData) {
        'use server'

        const userId = formData.get('userId')

        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`,{
            cache: 'force-cache',
            next:{
               revalidate: 3600 
            }
        })
        const data: ResponseProps = await response.json()

        console.log(data)
    }

    return (
        <div>
            <h1>Todos os posts</h1>

            <button onClick={handleFetchPosts}>
                Buscar posts
            </button>

            <form
                className="form"
                action={handleSearchUser}
            >
                <input
                    type="text"
                    placeholder="ID do usuário"
                    className="input"
                    name='userId'
                />
                <button className="button" type="submit">
                    Buscar usuário
                </button>
            </form>
            <div>
                {data.posts.map(post => (
                    <div className='posts' key={post.id}>
                        <h2> {post.title}</h2>
                        <p>  {post.body} </p>
                        <Link className='link' href={`/posts/${post.id}`}>
                            Acessar detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}