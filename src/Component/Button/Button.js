import { Component } from 'react'
import './style.css'

function Button (props){

        return (
            <div
            className={props.isPurple ? "btn background-button":"btn"}
            onClick={props.handleClick}
            >
              {props.text}
            </div>
        );

}

export default Button;
