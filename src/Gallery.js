import GalleryItem from "./GalleryItem";

const Gallery = props => {
  const images = [
    {
      url: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
      tag: "dogs",
    },
    {
      url: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
      tag: "cats",
    },
    {
      url: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
      tag: "dogs",
    },
    {
      url: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
      tag: "computers",
    },
  ];
  const count = images.filter(item => item.tag === props.match.params.search).length;
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {count === 0 ? (
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
          </li>
        ) : (
          images
            .filter(item => item.tag === props.match.params.search)
            .map((item, index) => <GalleryItem key={index} src={item.url} />)
        )}
      </ul>
    </div>
  );
};

export default Gallery;
