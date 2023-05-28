import { formatTimestamp } from "../../utils";
import "./CommentCard.scss";
function CommentCard({ comment }) {
  const date = formatTimestamp(comment.timestamp);
  return (
    <>
      <div className="comment">
        <div className="comment__avatar avatar"></div>
        <div className="comment__container">
          <div className="comment__name">{comment.name}</div>
          <div className="comment__date">{date}</div>
          <div className="comment__content">{comment.comment}</div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default CommentCard;
