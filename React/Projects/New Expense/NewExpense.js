import React from "react";
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'

const NewExpense=(props)=>{

    const saveDataHandler = (enteredData) =>{
        const expenseData={
            ...enteredData,
            id:Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData);
    }
    return(
        
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveDataHandler}/>
        </div>
    )
}

export default NewExpense;