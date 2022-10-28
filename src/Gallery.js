import React, { useState, useEffect } from "react";

import GalleryItem from "./GalleryItem";
import keys from "./config";

const Gallery = props => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState(props.match.params.search);

  if (search !== props.match.params.search) {
    window.location.reload(false);
  }

  const fetchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${keys.flickrKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;

  useEffect(() => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => setImages(data.photos.photo))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="photo-container">
      {images.length !== 0 && props.match.params.search ? (
        <h2>Results for {props.match.params.search[0].toUpperCase() + props.match.params.search.substring(1)}</h2>
      ) : (
        ""
      )}
      <ul>
        {images.length === 0 ? (
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
          </li>
        ) : (
          images.map((photo, index) => <GalleryItem key={index} photo={photo} />)
        )}
      </ul>
      {search + " " + props.match.params.search}
    </div>
  );
};

export default Gallery;
