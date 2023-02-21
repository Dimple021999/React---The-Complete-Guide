import React,{ ReactPropTypes } from "react";
import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import Card from "../Ui/Card";

const ExpenseItem = (props) => {

    const [title,setTitle] =useState(props.title);

    const clickHandler=()=>{
       setTitle('updated');
       console.log(title)
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

//validating datatype of prop
ExpenseDate.prototype={
    title:ReactPropTypes=String,
}
// ExpenseDate.prototype={
//     title:ReactPropTypes=Number;
// } 
// ->error as title will be string

export default ExpenseItem;