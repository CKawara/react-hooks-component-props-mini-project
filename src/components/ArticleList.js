import { Fragment } from "react"
import Article from "./Article"

function ArticleList({posts}){

    const onePost = posts.map(post =>{
        return <Fragment key={post.id}>{Article(post)}</Fragment>
    })
    return (
        <main>
            {onePost}
        </main>
    )
}
export default ArticleList