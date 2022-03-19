import logo from './logo.svg';
import './App.css';
import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <main className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </main>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </main>
      </div>
    )
  }
}

export default App;
