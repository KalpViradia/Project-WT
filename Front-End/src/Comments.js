import { useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mx-3">
      <h2 className="mt-2 mb-2">Add Comment</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment here..."
          rows="4"
          className="form-control mb-2"
        />
        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="mt-2">
        <h3>All Comments:</h3>
        <ul>
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;