import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const NewsDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editedComment, setEditedComment] = useState("");

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`http://localhost:5000/api/articles/${id}`);
            const data = await response.json();
            setArticle(data);
            setComments(data.comments);
        };
        fetchArticle();
    }, [id]);

    const handleAddComment = async () => {
        if (newComment.trim()) {
            const response = await fetch(`http://localhost:5000/api/articles/${id}/comments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: newComment })
            });
            const updatedArticle = await response.json();
            setComments(updatedArticle.comments);
            setNewComment("");
        }
    };

    const handleEditComment = (index) => {
        setEditIndex(index);
        setEditedComment(comments[index].content);
    };

    const handleUpdateComment = async () => {
        const response = await fetch(`http://localhost:5000/api/articles/${id}/comments/${comments[editIndex]._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: editedComment })
        });
        const updatedArticle = await response.json();
        setComments(updatedArticle.comments);
        setEditIndex(null);
        setEditedComment("");
    };

    const handleDeleteComment = async (index) => {
        await fetch(`http://localhost:5000/api/articles/${id}/comments/${comments[index]._id}`, {
            method: 'DELETE'
        });
        setComments(comments.filter((_, i) => i !== index));
    };

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-4">
            <h1>{article.title}</h1>
            <img src={article.ProfilePic} alt={article.title} className="img-fluid mb-3" />
            <p>{article.content}</p>
            <Link to="/" className="btn btn-secondary">Back to Home</Link>

            <h3 className="mt-4">Comments</h3>
            <div>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="form-control mb-2"
                />
                <button onClick={handleAddComment} className="btn btn-primary">Submit</button>
            </div>

            <ul className="list-group mt-3">
                {comments.map((comment, index) => (
                    <li key={comment._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {editIndex === index ? (
                            <>
                                <textarea
                                    value={editedComment}
                                    onChange={(e) => setEditedComment(e.target.value)}
                                    className="form-control me-2"
                                />
                                <button onClick={handleUpdateComment} className="btn btn-success">Update</button>
                            </>
                        ) : (
                            <>
                                <span>{comment.content}</span>
                                <div>
                                    <button onClick={() => handleEditComment(index)} className="btn btn-warning btn-sm me-2">Edit</button>
                                    <button onClick={() => handleDeleteComment(index)} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsDetail;