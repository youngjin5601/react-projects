function Nav(){
  const [movies, setMovies]=React.useContext(MovieContext)
  const navStyle={
    display:"flex",
    alignItems:"center",
    justifyContent: "space-around",
    minHeight: "10vh",
    backgroundColor: "red",
    color:"white"
  }
  return(
    <div style={navStyle}>
      <h3>Dev Ed</h3>
      <p>List of Movies:{movies.length} </p>
    </div>
  )
}