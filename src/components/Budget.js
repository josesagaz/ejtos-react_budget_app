import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            window.alert ("The value cannot exceed 20000")
        }
        if(event.target.value < expenses){
            window.alert ("You can not reduce the budget lower than the spending ")
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
