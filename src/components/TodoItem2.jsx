function TodoItem2() {
  let todoName = 'Complete Assignment';
  let todoDate = '20/02/2024';

  return (
    <div className="container">
      <div className="row man-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button man-button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;