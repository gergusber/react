import React from 'react'
// import PropTypes from 'prop-types'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    // const initialState={

    // }
    // const [expenseState
    //     , setexpenseState
    // ] = useState(initialState)


    const SaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log('New Expense data',expenseData)
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
        </div>
    )
}

// NewExpense.propTypes = {

// }

export default NewExpense
