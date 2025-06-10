import { useState } from "react";

const numeroDinamico = ()=>{
    const [numeroInicial, setNumeroInicial] = useState(0)
    console.log(numeroInicial)
    const sumar = ()=>{
        setNumeroInicial(numeroInicial + 1)
    }

    const restar = ()=>{
        setNumeroInicial(numeroInicial - 1)
    }
    
    return(
        <section className="text-center">
            <h1 className="bg-primary py-3 text-white ">Contador 🕛</h1>
            <div className="d-flex justify-content-center gap-3 mt-5 mb-5">
                <button className="btn btn-danger" onClick={restar}>Restar</button>
                <h3 className="mb-0">{numeroInicial}</h3>
                <button className="btn btn-primary" onClick={sumar}>Sumar</button>
            </div>
        </section>
    )

}

export default numeroDinamico