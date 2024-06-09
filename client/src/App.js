import React, {useEffect, useState} from 'react'
import './App.css'
function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()).then(
        data => {
          setBackendData(data)
        }
      )
  }, []);

  return (
    <div>
      <nav id="desktop-nav">
        <div class="logo">Colorstack KSU</div>
        
        <div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Events</a></li>
                <li><a href="#projects">E-Board</a></li>
                <li><a href="#contact">Sponsors</a></li>
            </ul>
        </div>
    </nav>
    <hr></hr>
      {(typeof backendData.users === 'undefined') ? (<p>Loading...</p>): 
    (
      backendData.users.map((user, i)=> (
        <p key={i}>{user}</p>
      ))
    )}
    </div>

  )
}

export default App