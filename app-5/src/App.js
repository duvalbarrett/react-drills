import React from 'react';
import Image from './Image';
import './App.css';

function App() {
  return (
    <div className="App">Unhappy Cat
 
 <Image url={'https://pyxis.nymag.com/v1/imgs/1a6/fd2/90b8f4c3502e59a232ef01300bc6287c0d-29-grumpy-cat.rsquare-zoom.w190.jpg'} alt=''/>
    </div>

  );
}

export default App;

// Class Component Method

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Image url={"https://http.cat/409"} />
//       </div>
//     );
//   }
// }