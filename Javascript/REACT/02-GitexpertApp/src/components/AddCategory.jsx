import { useState } from "react"

export const AddCategory = ({ setCategorias }) => {
    
    const [inputvalue, setInputValue] = useState('One Punch')
    //console.log (event.target.value)

 // const onInputChange = (event) => {
    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }
    const onSubmitForm = (event) => {
        event.preventDefault();
        //se cumple si hay mas de un caracter
        if (inputvalue.trim().length <= 1) return  
        setCategorias( categorias => [inputvalue, ...categorias ])
        setInputValue('')
    }
    return (
        <form onSubmit= { onSubmitForm }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputvalue}
                onChange = { onInputChange }
             // onChange = { (event) => onInputChange (event)}
            />
        </form>
    )
}
