import './Pixel.scss'
import { useState } from 'react'
function Pixel(props){

    let  s = props.colors.hex 
   
    const [pixelColor, setPixelColor] = useState()
   
 
    function changeColor(){
      setPixelColor(s)   
    }

    function changecolorHover(){
    
    }

    function reset(){
     
    }

    return(
        <article className = "Pixel" onClick={ changeColor } onMouseEnter={ changecolorHover} onMouseLeave={reset} style = { {background: pixelColor }} ></article>
    )
}
export default Pixel