import { useState } from "react"

export const AddCategory = ({ setCategorias }) => { //props = setCategorias
    
    const [inputvalue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }
    const onSubmitForm = (event) => {
        event.preventDefault();

        if (inputvalue.trim().length <= 1) return  //1
        setCategorias( categorias => [inputvalue, ...categorias ]) //2
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
