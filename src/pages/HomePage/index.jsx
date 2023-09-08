import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { api } from "../../service/index"


export const HomePage = () => {

    const [ postList, setPostList ] = useState([])

    useEffect(() => {

        const post = async () => {
            try {
                const { data } = await api.get("/news")
                setPostList(data)
            } catch (error) {
                console.log(error)
            }
        }

        post()

    }, [])

    return(
        <>
            <h1>HomePage</h1>

            <ul>
                {postList.map((post) => {
                    return(
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <Link to={`/post/${post.id}`}>Ler mais</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}