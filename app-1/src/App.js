import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      input: ''
    }
  }

      changeHandler = (value) => {
        this.setState ( {input: value} )
      }

  
  render() {
    return (
      <>
        <input type='text' placeholder='type something' onChange={(e) => this.changeHandler(e.target.value)}/>
        <p>{this.state.input}</p>
      </>
    )
  }
}


// Functional Component

// function App() {
//   const [input, setInput] = useState("")
//   return (
//     <div className="App">
//       <input type="text" onChange={(e) => setInput(e.target.value)}/>
//       <p>{input}</p>
//     </div>
//   );
// }

// export default App;
