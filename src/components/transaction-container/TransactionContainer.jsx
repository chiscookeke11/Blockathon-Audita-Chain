import React, { useState } from 'react';
import './transactionContainer.css';
import TransactionTable from './TransactionTable';

const TransactionContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const transactions = [
    { date: "10/30/24", transactionId: "TXN123", from: "Sender A", to: "Receiver A", amount: "100", department: "Sales" },
    { date: "10/30/24", transactionId: "TXN456", from: "Sender B", to: "Receiver B", amount: "200", department: "Marketing" },
    { date: "10/30/24", transactionId: "TXN789", from: "Sender C", to: "Receiver C", amount: "300", department: "Finance" },
    
    { date: "10/30/24", transactionId: "TXN123", from: "Sender A", to: "Receiver A", amount: "100", department: "Sales" },
    { date: "10/30/24", transactionId: "TXN456", from: "Sender B", to: "Receiver B", amount: "200", department: "Marketing" },
    { date: "10/30/24", transactionId: "TXN789", from: "Sender C", to: "Receiver C", amount: "300", department: "Finance" },
    
    { date: "10/30/24", transactionId: "TXN123", from: "Sender A", to: "Receiver A", amount: "100", department: "Sales" },
    { date: "10/30/24", transactionId: "TXN456", from: "Sender B", to: "Receiver B", amount: "200", department: "Marketing" },
    { date: "10/30/24", transactionId: "TXN789", from: "Sender C", to: "Receiver C", amount: "300", department: "Finance" },
    
  ];

  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

 
  const filteredTransactions = transactions.filter(transaction =>
    transaction.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='transaction-container'>
      <input
        type="search"
        placeholder='Search transaction by ID'
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default TransactionContainer;
