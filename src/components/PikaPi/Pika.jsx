import React, { useState, useEffect } from "react";
import './pika.css';

export const Pika = () => {

    const [pokemon, setPokemon] = useState("");

    const [id, setId] = useState(1);

    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default,
                })
            })
    }, [id])

    const anterior = () => {
        id > 1 && setId(id - 1)
    }

    const siguiente = () => {
        setId(id + 1)
    }

    const inputChange = (e) => {
        setBusqueda(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        if (busqueda.length > 2) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
                .then((res) => res.json())
                .then((data) => {
                    setPokemon({
                        nombre: data.name,
                        img: data.sprites.front_default,
                    })
                    setId(
                        data.id
                    )
                })
        }
    }

    return (
        <>
            <h3 className="pika">{pokemon.numero}</h3>
            <h3 className="pika">{pokemon.nombre}</h3>
            <div className="pika">
                <img src={pokemon.img} />
            </div>
            <div className="pika">
                <button onClick={anterior}>Anterior</button>
                <button onClick={siguiente}>Siguiente</button>
            </div>
            <form onSubmit={submit} className="pika">
                <input type="text" value={busqueda} onChange={inputChange} />
            </form>
        </>
    )
}