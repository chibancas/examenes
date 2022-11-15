import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ categoria }) => {
  
  const [counter, setCounter]  = useState(10);
  const [ images, setImages ] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(categoria);
    setImages(newImages)
  }

  useEffect ( () => {
      getImages();
  }, []);

  // useEffect( () => {
  //   getGifs(categoria)
  //     .then (newImages => setImages())
  //   }, [ ]
  // )

  return (
    <>
        <h2> { categoria } </h2>
        <div className="card-grid">
          { 
            images.map( ( image ) => (
              <GifGridItem 
                key= { image.id }
                //operador spread: espacimos todas las propiedades
                { ...image } 
                //no son necesarias
                // title = { image.title }
                // url = { image.url }
              />
            ))
          }
        </div>
    </>
  )
}
