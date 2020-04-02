const MovieList=()=>{
  const [movies,setMovies]= React.useContext(MovieContext)
  return (
    <ul>
      {movies.map((movie)=>(
        <li key={movie.name}>{movie.name} , {movie.price}</li> 
      ))}
    </ul>
  )
}