import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Products = () => {

const [pokemon, setpokemon] = useState([])

useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => {
        setpokemon(res.data)
    })
}, [])


const displayPokemon = pokemon.map((pokemon,index) => {
  return (
        <Link key={index} to={`/details/${pokemon.id}`}>
        </Link>
  )
})

return (
    <div>
        <h1>Pokemon</h1>
        {displayPokemon}
    </div>
    
)
}

export default Products;