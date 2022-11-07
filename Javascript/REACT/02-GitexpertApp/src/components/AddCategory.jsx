import { useState } from "react"

export const AddCategory = () => {
    
    const [inputvalue, setInputValue] = useState('One Punch')
    //console.log (event.target.value)

 // const onInputChange = (event) => {
    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }
    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log('--->',inputvalue)
    }
    return (
        <form onSubmit= { (event) => onSubmitForm(event) }>
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
