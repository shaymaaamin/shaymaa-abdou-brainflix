import "./ImageUploader.scss";

function ImageUploader({ label, image, setImage }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="image-uploader__thumbnail">
      <div className="form__field">
        <label>{label}</label>
        <input
          className="image-uploader__file"
          type="file"
          onChange={handleImageChange}
        />
        {image && (
          <img
            className="image-uploader__thumbnail-img"
            src={image}
            alt="Uploaded image"
          />
        )}
      </div>
    </div>
  );
}

export default ImageUploader;
