import { useState } from "react"

interface Props {
    initialValue?: number
}
export const CounterBy = ( { initialValue = 50 }: Props  ) => {
    
  const [ counterState, setCounterState ] = useState({
    counter: initialValue,
    nClicks: 0
  });


  const handleClick = ( value: number ) => {
    setCounterState( prev => ({
      counter: prev.counter + value,
      nClicks: prev.nClicks + 1
    }))
  }

  const { counter, nClicks } = counterState
  
  return (
    <>
        <h1>CounterBy: { counter } </h1>
        <h3>Clicks: { nClicks }</h3>
        <button onClick={ () => handleClick(1) }> +1 </button>
        <button onClick={ () => handleClick(5) }> +5 </button>
    
    </>
  )
}
