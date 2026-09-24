import React from 'react'

const Student = (props) => {
  return (
    <div>
        <div style={{border:'2px solid red', height:'300px',width:'200px',margin:'2px',padding:'1px'}}>
        
        <h5 style={{color:'red'}} >  STUDENT ID CARD</h5>
         <div> <img src={props.img} alt="profile" style={{width:'100px',height:'100px',border:'2px solid'}} /></div>
         <h5>Name: {props.name}</h5>
         <h5>Roll no:{props.rollno}</h5>
        <h5>YEAR:3rd year</h5>
        </div>
      

    </div>
  )
}

export default Student