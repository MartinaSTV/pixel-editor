import Pixel from "./Pixel"
import './Row.scss'
import uuid from 'uuid-random'
function Row(props){

   let selected = props.color

    const iD = uuid()
    
    let width = props.stl.width
    let parsedW = parseInt(width)

    let numbers = []
    for (let i = 0; i < parsedW; i++) {
       let j= numbers.push(i)
      }

     let article = numbers.map(()=>{
        return  <article className="Row"><Pixel colors = { selected } key = { iD }/></article>
     })
   
    return(
        <article className="Row__article">
           { article }
        </article>
    )
}
export default Row