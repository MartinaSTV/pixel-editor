import { useState } from "react"
import { TwitterPicker } from "react-color"
import Row from "../components/Row";
import { useLocation } from "react-router-dom";
import './Editor.scss'

function Editor(){

    let data = useLocation()
    let stl = data.state.pad
    const [pixelColor, setPixelColor] = useState('#000000');
     
    let height = stl.height
    let parsedH = parseInt(height)

    let numbersHeight = []
    for (let i = 0; i < parsedH; i++) {
       let j= numbersHeight.push(i)
      }

    let rows = numbersHeight.map(()=>{
        return <Row color = {pixelColor} stl = {stl}  />
    })

    return(
        <section className ="Editor">
            <h1 className="Editor__title">Pixel Editor</h1>
            <article className="Editor__picker"><TwitterPicker onChangeComplete={ setPixelColor } /> {/* selectPixelColor */}</article>
            <article className="Editor__row">
                {rows}
            </article>
        </section>

    )
}
export default Editor