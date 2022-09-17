import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import BCIPage from './routes/BCI Page';
import Starscape from './components/Starscape';

const App = () => {
  return <>
    <Starscape densityRatio={0.3} defaultAlpha={1}/>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/bci' element={<BCIPage/>}/>
        <Route path='*' element={
          <h1>Error: Page does not exist</h1>
        }/>
      </Routes>
      <Footer/>
    </Router>
  </>
}

export default App;