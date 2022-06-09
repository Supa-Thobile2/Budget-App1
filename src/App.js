import './App.css';
import AddItems from './components/additem'


import React, {useState} from 'react'
import DisplayTransaction from './components/DisplayTransactions'
function App() {

  const [transaction, setTransaction] = useState([]);

  const addTransaction = ((amount, item, transactionType)=>{

    setTransaction((item)=>[...item, {
      amount:amount,
      item:item,
      transactionType:transactionType
    }])
  });
  return (
    <div className="Container">
        <DisplayTransaction list= {transaction}/>
        <AddItems  add= {addTransaction}/>;
        
        
    </div>
  );
}

export default App;
