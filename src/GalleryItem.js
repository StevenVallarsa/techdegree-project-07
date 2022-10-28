/**
 * @param {object} props.photo image information object
 * @returns photo element
 */
const GalleryItem = ({ photo }) => {
  const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

  return (
    <li>
      <img src={url} alt={photo.title} />
    </li>
  );
};

export default GalleryItem;
