import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

const GitExpertApp = () => {
    
    const [ categorias, setCategorias ] = useState ( ['One Punch', 'Dragon Ball'] );
    const onAddCategory = () => {
        setCategorias ( [...categorias, 'Valorant']);
    }
    return (
        <>
            <h1>GitExpertApp</h1>
            
            <AddCategory setCategorias = { setCategorias } />
            {/* listado de tarjetas con cada giphy */}
            <ol>
                { 
                    categorias.map ( (categoria) => {
                        return <li key={categoria}> { categoria } </li>
                    })
                }
            </ol>
                {/* Giph Item */}
        </>
    )
}

export default GitExpertApp
