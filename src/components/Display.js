
import { ReactPropTypes } from "react"
import './Display.css'
export function Robot(props)
{
    return(
        <div className="robot">
          {props.imageUrls.length > 0 && (
        <div>
          <h2>Robot List:</h2>
          {props.imageUrls.map((url) => (
            <img  src={url} alt={`Generated Robot`} />
          ))}
        </div>
      )}
             
         
        </div>
       
    )
}