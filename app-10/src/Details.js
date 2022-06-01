import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Details = (props) => {

const [name, setname] = useState({})

const {id} = useParams()

useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => {
        setname(res.data.name)
    }) 
}, [])

  return (
    <div>Details
        <p>{name.name}</p>
        <p>{name.weight}</p>
        <p>{name.height}</p>
    </div>
  )
}

export default Details;