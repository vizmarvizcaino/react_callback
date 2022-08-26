import { useState } from 'react'



function Cards ({ id, handleCounter, counterGlobal}){
    const [counter, setcounter] = useState(0)

    function handleCounter1 () {
        handleCounter(id)
        setcounter(counter + 1)
    }

    return(
        <div className="container-cards">
            <div className="title-cards">Componente {id}</div>
            <div className="counter-cards">Contador Hijo: {counter}</div>
            <div className="difference-cards">Diferencia con mi hermano: {counterGlobal - counter}</div>
            <div className="buttton-cards">
            <button onClick={handleCounter1}>+1</button>
            </div>
        </div>
    )
}
export default Cards;