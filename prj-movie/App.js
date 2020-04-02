
const App=()=>{
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <MovieList/>
        <AddMovie/>
      </div>
    </MovieProvider>
  
  )
}
