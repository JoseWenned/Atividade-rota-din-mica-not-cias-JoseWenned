import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../service/index"

export const PostList = () => {

    const [ news, setNews ] = useState(null)

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        const getPost = async () => {
            try {
                
                const { data } = await api.get(`/news/${id}`);
                setNews(data);

            } catch (error) {
                console.log(error);
                navigate("/404")
            }
        }
        getPost();

    }, [])

    return(
        <ul>
            {news ? (
               
                <li>
                    <h2>{news.category}</h2>
                    <p>{news.title}</p>
                    <p>{news.content}</p>
                    <p>{news.author}</p>
                </li>
             
            ): null}
        </ul>
    )
}