function Deneme({ photos }) {
  return (
    <div className="container">
      {photos?.map((photo) => {
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
