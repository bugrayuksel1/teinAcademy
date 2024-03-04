import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../../../../redux/classSlice";

function Deneme() {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.klas);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      dispatch(setPhotos(response.data));
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
