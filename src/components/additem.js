
import React, {useState} from "react";//imported react with a hook useState
import "../css/add.css"//imported styling for items from an external css file (add.css)

//passed props as parameters of a function
    // sets the states for our input fields and updates our state
function AddItems (props){
    const [amount, setAmount] = useState ('');
    const [item, setItem] = useState("");
    const [transactionType, settransactionType] = useState('');

    //Method that adds 
    const add = (()=>{
        console.log(amount)
        console.log(item)
        console.log(transactionType)

        props.add(amount,item,transactionType);
    })
   //Added an event handler on the add button and passed it the add function
    return (
        <div>
            <h1 style={{paddingTop:'5px'}}>Add Transactions</h1>
            <input placeholder="Enter item" onChange={(e)=>setItem(e.target.value)}/><br/><br/>
            <input placeholder="Enter amount" onChange={(e)=> setAmount(e.target.value)}/><br/><br/>
            <select onChange={(e)=> settransactionType(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select><br></br>
            <button id="btn" onClick={add}>Add</button>
        </div>
    )
}

export default AddItems;


// This file contains the component that adds transactions add trnsactions like expenses or income
    // imports a style sheet to add style
    //Defines a function that add items 
    //imports a hook called useState from react
    // Defines a function that adds items 