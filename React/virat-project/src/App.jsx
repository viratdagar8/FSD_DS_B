
import React from 'react'
import Student from './components/Card'

const App = () => {
  return (
    <div style={{display:'flex',gap:'10px' }}>
      <Student name="Mohit" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcXGhMhbFPXenXQb1P4R6jo7_F24H4cg_fPCOSNubtQ&s" rollno="102"/>
      <Student name="harshit jaat"img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BjV36wjwvE6XHLlkK-RR8hNGjZ2Il1nIBow604qyyQ&s=10"rollno="103"/>
      <Student name="Suraj"img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxSS2p6AedNDY8r_MN6IGfJ_PAOEPW9H7uEoietf96w&s=10"rollno="104"/>
      <Student name="Vansh" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgP2MU5uO_gwicaBprzvsJk6avD-7coEFUhtfUTZBUOUZgiHK-4EymCE&s=10"rollno="105"/>
      
      
    </div>
  )
}

export default App