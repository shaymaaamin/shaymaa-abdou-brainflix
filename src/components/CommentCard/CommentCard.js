import { deleteComment } from "../../api";
import { formatTimestamp } from "../../utils";
import "./CommentCard.scss";

function CommentCard({ videoId, setRefresh, comment }) {
  const date = formatTimestamp(comment.timestamp);

  const clickHandler = () => {
    deleteComment(videoId, comment.id).then(() => {
      setRefresh(true);
    });
  };

  return (
    <>
      <div className="comment">
        <div className="comment__avatar avatar"></div>
        <div className="comment__container">
          <div className="comment__name">{comment.name}</div>
          <div className="comment__date">{date}</div>
          <div className="comment__content">{comment.comment}</div>
          <div className="comment__footer">
            <button
              className="icon icon--delete"
              onClick={clickHandler}
            ></button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default CommentCard;
