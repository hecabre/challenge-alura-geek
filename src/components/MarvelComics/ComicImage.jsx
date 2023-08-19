
function ComicImage({ urlImg, imgExtension, comicTitle, fallbackImage }) {
  return (
    <img
      src={
        fallbackImage
          ? "../assets/notfound.jpg"
          : `${urlImg}.${imgExtension}`
      }
      alt={comicTitle}
      className="h-32 w-32 rounded"
    />
  );
}

export default ComicImage;
