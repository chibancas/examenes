import { useState } from "react"

const GitExpertApp = () => {
    
    //categorias = ['One Punch']
    const [ categorias, setCategorias ] = useState ( ['One Punch', 'Dragon Ball'] );
    console.log (categorias);
    return (
        <>
            {/* titulo */}
            <h1>GitExpertApp</h1>


            {/* buscador de giphy */}

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
