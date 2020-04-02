const MovieContext=React.createContext()

const MovieProvider= ({children})=>{
  const [movies,setMovies]=React.useState([
    {
      name: 'Harry Porter',
      price: '$10',
      id: 23165
    },
    {
      name: 'Game ofThrones',
      price: '$30',
      id: 53165
    },
    {
      name: 'Inception',
      price: '$60',
      id: 13765
    }
  ])

  return (
    <MovieContext.Provider value={[movies,setMovies]}>
      {children}
    </MovieContext.Provider>
  )
}