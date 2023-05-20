import CommentsForm from "./CommentsForm/CommentsForm";
import CommentCard from "./CommentCard/CommentCard";
import "./CommentsList.scss";

function CommentsList({ comments }) {
  const listItems = comments.map((comment) => (
    <CommentCard key={comment.id} comment={comment} />
  ));
  return (
    <>
      <section className="comments-list">
        <h3>{comments.length} Comments</h3>
        <CommentsForm />
        <div className="comments-list__items">{listItems}</div>
      </section>
    </>
  );
}

export default CommentsList;
