import './Pixel.scss'
import { useState } from 'react'
function Pixel({color}){

    let colors = color.hex

    const[pixelcolor, setPixelColor] = useState('#000')
    const [nextColor, setnextColor] = useState(pixelcolor)
    const [changeColors, setchangeColors] = useState(true)

    function changeColor(){
       setPixelColor(colors)
       setchangeColors(false)
    }
     function changecolorHover(){
        setnextColor(pixelcolor)
        setPixelColor(colors)
    }
    function reset(){
        if (changeColors){
            setPixelColor(nextColor)
        }
        setchangeColors(true)
    }

    return(
        <article className = "Pixel" onClick={ changeColor } onMouseEnter={ changecolorHover} onMouseLeave={reset} style = { {background: pixelcolor}} ></article>
    )
}
export default Pixel