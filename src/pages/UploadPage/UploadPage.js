import "./UploadPage.scss";
import uploadimg from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigateTo = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    alert("your video is published");
    navigateTo("/");
  }

  return (
    <section className="upload-page page__section">
      <h1 className="upload-page__title">Upload Video</h1>
      <form
        className="upload-page__form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="upload-page__thumbnail">
          <div className="form__field">
            <label>VIDEO THUMBNAIL</label>
            <img
              className="upload-page__thumbnail-img"
              src={uploadimg}
              alt="uploaded video thumbnail"
            />
          </div>
        </div>
        <div className="upload-page__form-fields">
          <div className="form__field">
            <label>TITLE YOUR VIDEO</label>
            <input
              type="text"
              name="input"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="form__field">
            <div className="form__field">
              <label>ADD A VIDEO DESCRIPTION</label>
              <textarea
                type="text"
                name="inputtext"
                placeholder="Add a description to your video"
                rows="2"
              />
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="upload-page__buttons">
          <button type="submit" className="secondary">
            CANCEL
          </button>

          <button type="submit" className="icon icon--publish">
            PUBLISH
          </button>
        </div>
      </form>
    </section>
  );
}
export default UploadPage;
