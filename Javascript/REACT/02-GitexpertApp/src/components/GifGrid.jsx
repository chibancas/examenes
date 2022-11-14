import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"


export const GifGrid = ({ categoria }) => {
  
  const [counter, setCounter]  = useState(10);
  const [ images, setImages ] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(categoria);
    // console.log(newImages);
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
        <ol>
          { images.map( ( {id, title} ) => (
            <li key={id}> {title}</li>
            ))
          }
        </ol>
    </>
  )
}
