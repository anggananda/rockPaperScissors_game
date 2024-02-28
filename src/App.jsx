import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Play from './components/Play';
import Guide from './components/Guide'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how' element={<Guide/>} />
        <Route path='/play' element={<Play/>} />
      </Routes>
    </Router>
  );
}

export default App;
