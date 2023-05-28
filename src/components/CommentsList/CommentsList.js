import "./CommentsList.scss";

import CommentsForm from "../CommentsForm/CommentsForm";
import CommentCard from "../CommentCard/CommentCard";

function CommentsList({ videoId, setRefresh, comments }) {
  return (
    <>
      <section className="comments-list">
        <h3>{comments.length} Comments</h3>
        <CommentsForm videoId={videoId} setRefresh={setRefresh} />
        <div className="comments-list__items">
          {comments
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((comment) => (
              <CommentCard
                key={comment.id}
                comment={comment}
                videoId={videoId}
                setRefresh={setRefresh}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default CommentsList;
