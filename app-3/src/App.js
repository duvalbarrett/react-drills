import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  constructor(){
  super()

  this.state = {
    input:'',
    food: [
      'spaghetti',
      'sushi',
      'bologna',
      'ice-cream',
      'cheese'
    ]
  }
}

  handleChange = filter =>{
    this.setState ( {input: filter})
  }


  render() {

    let foodsDisplay = this.state.food.filter((element,index) => {
      return element.includes(this.state.input)
    })
    .map((element,index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className='App'>
        <input type='text' onChange={ (e) => this.handleChange(e.target.value)}/>{foodsDisplay}
      </div>
    )
  }
}

// Functional Component

// function App() {
//   const [array, setArray] = useState(["Ducks","Owls","Pigeons","Falcons","Eagles"])
//   const [filter, setFilter] = useState("")

//   let list = array.filter((element, index) => {
//       return element.includes(filter);
//     })
//     .map((element, index) => {
//       return <h2 key={index}>{element}</h2>;
//     });

//   return (
//     <div className="App">
//       <input type="text" onChange={(e) => setFilter(e.target.value)}/>
//       {list}
//     </div>
//   );
// }

// export default App;