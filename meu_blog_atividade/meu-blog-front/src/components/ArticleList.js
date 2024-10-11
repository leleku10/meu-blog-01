import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
    return (
        <>
            {articles.map(article => (

            <Link key={article.name} className="article-list-item" to={`/articlelist/${article.name}`}>
                <h1>{article.title}</h1>
                <p>{article.content[0].substring(0,150)}...</p>
            </Link>
        ))}
        </>
    )
}

export default ArticleList;