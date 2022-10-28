import React, { useState, useEffect } from "react";

import GalleryItem from "./GalleryItem";
import keys from "./config";

const Gallery = props => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  // setCount(prev => prev + 1);

  useEffect(() => {
    const searchTerm = props.match.params.search;
    const fetchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${keys.flickrKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => setImages(data.photos.photo))
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
    console.log(searchTerm);
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
      {count}
    </div>
  );
};

export default Gallery;
