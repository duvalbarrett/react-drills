import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      foods: [
        'spaghetti',
        'lasagna',
        'chicken',
        'sushi',
        'cheese'
      ]
    }
  }



  render() {
    let foodsToDisplay = this.state.food.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return (
      <div className='App'>{foodsToDisplay}</div>

    )
  }
}


// Functional Component

// function App() {
//   const [array, setArray] = useState(["Ducks","Owls","Pigeons","Falcons","Eagles"])

//   let list = array.map((element, index) => {
//     return <h2 key={index}>{element}</h2>
//   })

//   return (
//     <div className="App">
//       {list}
//     </div>
//   );
// }

// export default App;
