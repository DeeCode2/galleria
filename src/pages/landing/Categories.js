/* contains 3 Cat components */
import React from "react";
import Cat from "./Cat.js";
import './Categories.scss';

export default function Categories() {
    return (
        <div id="cats">
            <Cat
                id="one"
                title="The Gallery"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus enim quis augue aliquam mollis. Vestibulum vehicula erat diam, a efficitur ex scelerisque congue. Vestibulum est erat, scelerisque vitae ipsum vel, accumsan dapibus velit."
                link="/Gallery"
            />
            <hr />
            <Cat
                id="two"
                title="Lorem Ipsum"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus enim quis augue aliquam mollis. Vestibulum vehicula erat diam, a efficitur ex scelerisque congue. Vestibulum est erat, scelerisque vitae ipsum vel, accumsan dapibus velit."
                link="#"
            />
            <hr />
            <Cat
                id="three"
                title="Lorem Ipsum"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus enim quis augue aliquam mollis. Vestibulum vehicula erat diam, a efficitur ex scelerisque congue. Vestibulum est erat, scelerisque vitae ipsum vel, accumsan dapibus velit."
                link="#"
            />
        </div>
    )
}