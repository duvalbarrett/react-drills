import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';


export const Pokeapi = () => {

    const [pokemon, setPokemon] = useState('')

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/35`)
        .then(res =>
            {setPokemon(res.data)
        })
    }, [])


return (
    <div>
        <h1>Pokemon</h1>
        <h2>Name: {pokemon.name}</h2>
        <h2>Height: {pokemon.height}</h2>
        <h2>Weight: {pokemon.weight}</h2>

    </div>
    )
}

export default Pokeapi;





// Class Component

// import React, { Component } from 'react'

// export default class Pokeapi extends Component {
// constructor() {
//     super() {

//     state = {
//         pokemon: ''
//     }
// }

//     const getPokeData = () => {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/35`)
//         .then(res => {
//             this.setState(res.data)
//         })
//     }
// }

// render() {
//     return (
//       <div>Pokeapi
//           <h1>Name: {this.state.pokemon.name}</h1>
//           <h2>Weight: {this.state.pokemon.weight}</h2>
//           <h2>Height: {this.state.pokemon.height}</h2>
//       </div>
//     )
//   }
// }

