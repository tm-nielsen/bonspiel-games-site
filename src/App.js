import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import BCIPage from './routes/BCI Page';
import Starscape from './components/Starscape';

const App = () => {
  return <Router>
    <Starscape densityRatio={0.3} defaultAlpha={1}/>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/bci' element={<BCIPage/>}/>
      <Route path='*' element={
        <h1>Error: Page does not exist</h1>
      }/>
    </Routes>
  </Router>
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;