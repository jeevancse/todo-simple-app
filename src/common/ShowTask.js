const ShowTask = ({ data}) => {
    console.log("=====>>>>state", data)
  return (
    <div>
      <h4>{}</h4>
      <div>
        <span>Created By</span>
        <span>{}</span>
      </div>
      <div>
        <span>Description</span>
        <span>{}</span>
      </div>
    </div>
  );
};

export default ShowTask
