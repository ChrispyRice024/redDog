import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import Header from './pages/Header'
import Home from './pages/Home'

function App() {
  return (
      <Router>
        <div className="App">
        <header>
          <Header/>
        </header>

          <Routes>
            <Route exact path='/' element={<Home />}/>
            {/* <Route path='/about' element={<About/>}/>
            <Route path='/order' element={<Order/>}/> */}
            <Route path='/contact' element={<Contact/>}/>
          </Routes>


        </div>
      </Router>
  );
}

export default App;

