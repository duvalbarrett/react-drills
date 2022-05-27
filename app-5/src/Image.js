import React from "react";

const Image = (props) => {
    return (
        <>
        <img src={props.url} alt=''/>
        </>
    )
}

export default Image;


// Class Component Method

// export default class Image extends Component {
//     render() {
//       return (
//         <div>
//           <img src={this.props.url} />
//           <div>Error 599</div>
//         </div>
//       )
//     }
//   }