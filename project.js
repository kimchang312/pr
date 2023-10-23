const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDVjYzE4YTk5Y2U4MTc1Y2I4YTI2YjRmMzhkNjkxMCIsInN1YiI6IjY1MmY0OWU4MDI0ZWM4MDEwMTU0MTkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fn5pNmujTnJOpP-y8uUDOYk0DX44yKCTXfaPIpm3a1M'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    //   node project.js  
