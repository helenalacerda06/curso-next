'use client'

import { useEffect, useState } from "react";
import './page.css'

export default function PageTeste(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts))
    }, [])
    return(
        <div>
          <h1>Página Client</h1> 
          
            <div>
                {posts.map((post : any) => (
                    <div className='posts' key={post.id}>
                        <h2> {post.title}</h2>
                        <p>  {post.body} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}