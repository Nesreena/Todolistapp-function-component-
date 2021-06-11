// import { render } from "@testing-library/react";
// import { Component } from "react";
import Button from "../Button/Button"
import './style.css'

function ListItems (props) {

    return (
    <div className="list-items">
    <span className="task-title"> {props.task} </span> 
       
        <Button 
        text="Delete"
        isPurple={true}
        handleClick={props.handleDelete}
        
        />
   
    </div>
    );
        
  
  
}
export default ListItems