import { Routes, Route, useParams } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { PostPage } from "../pages/PostPage"

export const RouterMain = () => {

    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/post/:id" element={<PostPage />}/>
            </Routes>
        </>
    )
    
}