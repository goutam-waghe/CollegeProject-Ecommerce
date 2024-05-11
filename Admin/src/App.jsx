import React from 'react'
import Admin from './pages/admin/Admin.jsx'
import Navbar from './components/navbar/Navbar.jsx'

const App = () => {
  return (
    <div id='app'>
      <Navbar/>
      <Admin />
    </div>
  )
}

export default App
