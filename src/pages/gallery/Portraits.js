import React from "react"

export default function Portraits(props) {  
    
    return (
        <div className="gallery-card">
            
            <div class="card__info">
               <h3>{props.title}</h3>
               <span>{props.artist}<br />{props.date}<br /></span>
               {props.cardlink}
            </div>
            
            <img className="portrait" src={props.image} />

        </div>
    )
}