import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    {
                        // Budget component
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        }        

                     {
                        //Remaining component
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        }        

                    {
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <ExpenseTotal />                            
                        </div>
                        }
                     {
                        //Currency component
                        <div className='col-sm'>
                            <Currency />                            
                        </div>
                        }                
                       
                    {
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <h2 className='mt-3'>Allocation</h2>
                            <ExpenseList />
                        </div>
                        }        

                    {
                        //ExpenseItem component
                        <div className='col-sm'>
                            <ExpenseItem />
                        </div>
                        }        

                    {
                        //AllocationForm component
                        <div className='col-sm'>
                            <h2 className='mt-3'>Change Allocation</h2>
                            <AllocationForm />
                        </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
