import React from 'react'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import EventListing from './Pages/EventListing'
import EventRegister from './Pages/EventRegister'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
function App() {
  return (
   <div className="main">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-listing" element={<EventListing />} />
        <Route path="/event-register" element={<EventRegister />} />
      </Routes>
      <Footer/>
    </Router>
   </div>
  )
}

export default App