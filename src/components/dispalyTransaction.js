import React from "react";
function DisplayTransaction(props){
    return(
        <div>
            {props.list.map((item)=>(
                <div>
                    <h1>{item.amount}</h1>
                    <h1>{item.item}</h1>
                    <h1>{item.transactionType}</h1>
                </div>
            ))}
        </div>
    )
};

export default DisplayTransaction