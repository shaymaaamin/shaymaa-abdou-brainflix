import "./CommentsForm.scss";

function CommentsForm() {
  return (
    <>
      <div className="comments__form-wrapper">
        <h3 className="comments__form-title">join the conversation</h3>
        <div className="comments__form-avatar avatar"></div>
        <form className="comments__form">
          <textarea
            name="text"
            placeholder="Add a new comment"
            rows="5"
          ></textarea>
          <button type="submit" className="icon icon--comment">
            comment
          </button>
        </form>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default CommentsForm;
