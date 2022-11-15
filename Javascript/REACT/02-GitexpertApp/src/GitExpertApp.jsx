import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GitExpertApp = () => {
    
    const [ categorias, setCategorias ] = useState ( ['One Punch'] );
  
    const onAddCategory = ( newCategoria ) => {
        
        if (categorias.includes(newCategoria)) return
        setCategorias ( [newCategoria, ...categorias]);
    }
    return (
        <>
            <h1>GitExpertApp</h1>
            
            <AddCategory 
                onNewCategoria = { (valor) => onAddCategory(valor) }
            />
            { 
                categorias.map ( (categoria) => (
                    <GifGrid 
                        key={ categoria } 
                        categoria = { categoria }
                    />
                ))
            }
        </>
    )
}

export default GitExpertApp
