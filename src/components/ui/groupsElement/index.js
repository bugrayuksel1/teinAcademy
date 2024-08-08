function GroupsElement({ items }) {
  return (
    <div className="container">
      {items?.map((item) => {
        return (
          <div className="photo-container">
            <div>
              <div> id: {item.id}</div>
              <div>title:{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GroupsElement;
