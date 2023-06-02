import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Start.scss'
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
        <section className='Start'>
            <h1 className='Start__title'>Pixel Editor</h1>
            <p className='Start__text'>Ange dimensioner</p>
            <input type="number" className='Start__input' onChange= { (event)=>{setheigtnumber(event.target.value)}}  placeholder='Skriv in hur många pixlar' />
            <input type="number" className='Start__input' onChange= { (event)=>{setwidthnumber(event.target.value)}} placeholder='Skriv in hur många pixlar'/>
            <button className='Start__button' onClick={ goOn}>Submit</button>
        </section>
      
    )
}
export default Start