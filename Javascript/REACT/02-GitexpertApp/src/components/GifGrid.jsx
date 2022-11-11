import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"


export const GifGrid = ({ categoria }) => {
  
  const [counter, setCounter]  = useState(10);

  useEffect( () => {
    getGifs(categoria)
  }, [ ]
  )
  // setCounter( counter + 1) //cliclo infinito. Se redibuja
  return (
    <>
        <h2> { categoria } </h2>
        <h5>{ counter }</h5>
        <button onClick={ () => setCounter( counter + 1)}> +1 </button>
    </>
  )
}
