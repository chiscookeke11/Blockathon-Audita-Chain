import React from 'react'
import TransactionContainer from '../components/transaction-container/TransactionContainer';

const Transactions = () => {
  return (
    <div style={{height: "100vh", overflow: "auto"}}>
      <TransactionContainer/>
    </div>
  )
}

export default Transactions;