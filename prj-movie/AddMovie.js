

const AddMovie=()=>{
  const [movies,setMovies]=React.useContext(MovieContext)
  const [name,setName]=React.useState('')
  const [price,setPrice]=React.useState('')
  const addName=(e)=>{
    setName(e.target.value)
  }
  const addPrice=(e)=>{
    setPrice(e.target.value)
  }
  const addMovie=(e)=>{
    e.preventDefault()
    setMovies([...movies,{name:name, price: '$'+price}])
  }
  return(
    <form onSubmit={addMovie}>
      <input 
        type="text" 
        placeholder="name" 
        onChange={addName}>
      </input>
      <input 
        type="text" 
        placeholder="price" 
        onChange={addPrice}>
      </input>
      <button type="submit">AddMovie</button>
    </form>
  )
}