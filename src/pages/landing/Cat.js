import React from "react";

export default function Cat(props) {
    return (
        <div className="category" id={props.id}>
            <div className="cat__img"></div>
            <div className="cat__body">
                <div className="cat__text">
                    <h3 className="cat__title">{props.title}</h3>
                    <p className="cat__info">{props.info}</p>
                </div>
                
                <a className="cat__link" href={props.link} activeStyle>Read More</a> 
            </div>
        </div>
    )
}