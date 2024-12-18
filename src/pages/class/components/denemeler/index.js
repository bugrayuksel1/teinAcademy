import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, cleanUp } from "../../../../redux/classSlice";
import assets from "../../../../assets";

function Deneme() {
  const dispatch = useDispatch();
  const { photos, loading, errorMessage } = useSelector((state) => state.klas);

  useEffect(() => {
    dispatch(getPhotos());

    return () => {
      dispatch(cleanUp());
    };
  }, []);

  return (
    <div className="container">
      {loading && <img alt="loading" src={assets.gifs.loadingGif} />}
      {errorMessage && (
        <div>
          <h2 style={{ color: "red" }}>{errorMessage}</h2>
        </div>
      )}
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
