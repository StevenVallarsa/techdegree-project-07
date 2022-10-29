import React, { useState, useEffect } from "react";

import GalleryItem from "./GalleryItem";
import keys from "./config";

const Gallery = props => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState(props.match.params.search);
  const [isLoading, setIsLoading] = useState(true);

  // fetch call to gather 24 images from search string
  const getPhotos = () => {
    const fetchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${keys.flickrKey}&tags=${props.match.params.search}&per_page=24&format=json&nojsoncallback=1`;
    setIsLoading(true);
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => setImages(data.photos.photo))
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  };

  // run on first call
  useEffect(() => {
    getPhotos();
  }, []);

  // run on subsequent calls when search query has changed
  if (search !== props.match.params.search) {
    setSearch(props.match.params.search);
    getPhotos();
  }

  return (
    <div className="photo-container">
      {isLoading ? <h3>Loading...</h3> : ""}
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
    </div>
  );
};

export default Gallery;
