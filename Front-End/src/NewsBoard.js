import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/articles');
                const data = await response.json();
                const filteredArticles = category ? data.filter(article => article.Category.toLowerCase() === category) : data;
                setArticles(filteredArticles);
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            }
        };
        fetchArticles();
    }, [category]);

    return (
        <div>
            <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
            <div className="row">
                {articles.length > 0 ? (
                    articles.map((news) => (
                        <div className="col-md-4 mb-3" key={news._id}>
                            <NewsItem title={news.title} description={news.content} src={news.ProfilePic} url={news._id} />
                        </div>
                    ))
                ) : (
                    <div className="text-center">No articles available.</div>
                )}
            </div>
        </div>
    );
};

export default NewsBoard;