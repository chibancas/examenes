import { useState } from "react"

const GitExpertApp = () => {
    
    //categorias = ['One Punch', 'Dragon Ball']
    const [ categorias, setCategorias ] = useState ( ['One Punch', 'Dragon Ball'] );
    const onAddCategory = () => {
        setCategorias ( [...categorias, 'Valorant']);
        // setCategorias(cat => [ ...cat, 'Valorant'])
    }
    return (
        <>
            {/* titulo */}
            <h1>GitExpertApp</h1>
            {/* buscador de giphy */}

            {/* listado de tarjetas con cada giphy */}
            <button onClick={ onAddCategory }>Agregar</button>
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
