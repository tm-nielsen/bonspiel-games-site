import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import ScrollWrapper from './components/ScrollWrapper';
import Home from './routes/Home';
import BCIPage from './routes/BCI Page';
import Starscape from './components/Starscape';

const App = () => {
  return <>
    <Starscape densityRatio={0.3} defaultAlpha={1}/>
    <Router>
      <NavMenu/>
      <ScrollWrapper>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/bci' element={<BCIPage/>}/>
          <Route path='*' element={
            <h1>Error: Page does not exist</h1>
          }/>
        </Routes>
      </ScrollWrapper>
      <Footer/>
    </Router>
  </>
}

export default App;