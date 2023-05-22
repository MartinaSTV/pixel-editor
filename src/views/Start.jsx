import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Start(){
    
  let [heigtnumber, setheigtnumber] = useState(5)
  let [widthnumber, setwidthnumber] = useState(5)

  let drawingPad = {
    height: heigtnumber,
    width: widthnumber
  }
  console.log(drawingPad)

  let navigate = useNavigate()

  function goOn(){
    navigate ('/Editor', {state:{pad:drawingPad}})
  }

    return(
        <section>
            <h1>Pixel Editor</h1>
            <p>Ange dimensioner</p>
            <input type="number" onChange= { (event)=>{setheigtnumber(event.target.value)}}  placeholder='Skriv in hur många pixlar' />
            <input type="number" onChange= { (event)=>{setwidthnumber(event.target.value)}} placeholder='Skriv in hur många pixlar'/>
            <button onClick={ goOn}>Submit</button>
        </section>
      
    )
}
export default Start