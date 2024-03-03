function TableAction({ name, imageId, imageSize, onClick }) {
  return (
    <div className="table-action" onClick={() => onClick(name)}>
      <img
        className="inline-block"
        src={
          "https://img.icons8.com/?size=" +
          imageSize +
          "&id=" +
          imageId +
          "&format=png"
        }
        alt={name}
      />
      <div className="action-name"> Edit </div>
    </div>
  );
}

export default TableAction;
