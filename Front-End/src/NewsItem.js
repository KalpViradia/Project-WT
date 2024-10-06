import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ title, content, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <Link to={`/news/${url}`} className="btn btn-primary">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default NewsItem;