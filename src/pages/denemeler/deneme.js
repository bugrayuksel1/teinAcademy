import React, { useEffect, useState } from "react";
import axios from "axios";

function Deneme() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhotos(response.data);
    };
    fetchPhotos();
  }, []);

  return (
    <div className="container">
      {photos.map((photo) => {
        return (
          <div className="photo-container">
            <div>
              <div> id: {photo.id}</div>
              <div>title:{photo.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Deneme;
