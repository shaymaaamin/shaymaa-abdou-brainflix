import "./UploadPage.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadVideo } from "../../api";
import ImageUploader from "../../helpers/ImageUploader";

function UploadPage() {
  const [image, setImage] = useState(null);

  const navigateTo = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const { title, description } = event.target;
    uploadVideo(title.value, description.value, image).then((data) => {
      navigateTo(`/videos/${data.id}`);
    });
  }

  function cancelUpload(event) {
    event.preventDefault();
    navigateTo("/");
  }

  return (
    <section className="upload-page">
      <div className="upload-page__wrapper">
        <h1 className="upload-page__title">Upload Video</h1>
        <div className="divider"></div>
        <form
          className="upload-page__form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <ImageUploader
            label="Video Thumbnail"
            image={image}
            setImage={setImage}
          />
          <div className="upload-page__form-fields">
            <div className="form__field">
              <label>TITLE YOUR VIDEO</label>
              <input
                type="text"
                name="title"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="form__field">
              <div className="form__field">
                <label>ADD A VIDEO DESCRIPTION</label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Add a description to your video"
                  rows="5"
                />
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="upload-page__buttons">
            <button
              type="button"
              className="secondary"
              onClick={(e) => cancelUpload(e)}
            >
              CANCEL
            </button>

            <button type="submit" className="icon icon--publish">
              PUBLISH
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default UploadPage;
