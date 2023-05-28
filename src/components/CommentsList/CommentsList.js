import "./CommentsList.scss";

import CommentsForm from "../CommentsForm/CommentsForm";
import CommentCard from "../CommentCard/CommentCard";

function CommentsList({ comments }) {
  return (
    <>
      <section className="comments-list">
        <h3>{comments.length} Comments</h3>
        <CommentsForm />
        <div className="comments-list__items">
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </section>
    </>
  );
}

export default CommentsList;
