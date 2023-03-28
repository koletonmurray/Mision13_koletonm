import data from './MovieData.json';

const movieData = data.MovieData;

function MovieList() {
  return (
    <div>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
        <br></br>
      </div>
      <div className="container p3">
        <table className="table table-bordered table-striped">
          <thead className="font-weight-bold thead-dark">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      &nbsp; &nbsp;
    </div>
  );
}

export default MovieList;
