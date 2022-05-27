import React, { useState } from "react";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const loginInfo = (props) => {
    return (
      <>
        <input>username: {username}</input>
        <input>password: {password}</input>
      </>
    );
  };

  const onClickEvent = (props) => {
    alert(`username: ${username} password: ${password}`);
  };

  return (
    <div className="Login">
      Login
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit" onClick={(e) => onClickEvent(e.target.value)}>
          Login
        </button>
        <p>{loginInfo}</p>
      </form>
    </div>
  );
};

export default Login;


// Class Component Method

// class Login extends Component {
//   constructor() {
//     super();

//     this.state = {
//       username: "",
//       password: ""
//     };

//     this.handleLogin = this.handleLogin.bind(this);
//   }

//   handleUsernameChange(name) {
//     this.setState({ username: name });
//   }

//   handlePasswordChange(pass) {
//     this.setState({ password: pass });
//   }

//   handleLogin() {
//     alert(`Username: ${this.state.username} Password: ${this.state.password}`);
//   }

//   render() {
//     return (
//       <div>
//         <input
//           onChange={e => this.handleUsernameChange(e.target.value)}
//           type="text"
//         />
//         <input
//           onChange={e => this.handlePasswordChange(e.target.value)}
//           type="text"
//         />
//         <button onClick={this.handleLogin}>Login</button>
//       </div>
//     );
//   }
// }

// export default Login;