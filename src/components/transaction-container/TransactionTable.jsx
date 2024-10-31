import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div className="w-full p-4 bg-gray-800 rounded-lg overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left text-blue-400">
            <th className="p-3 border-b border-gray-600">Date</th>
            <th className="p-3 border-b border-gray-600">Transaction ID</th>
            <th className="p-3 border-b border-gray-600">From</th>
            <th className="p-3 border-b border-gray-600">To</th>
            <th className="p-3 border-b border-gray-600">Amount/Units</th>
            <th className="p-3 border-b border-gray-600">Department</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-3 text-center text-white">No transactions found.</td>
            </tr>
          ) : (
            transactions.map((transaction, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
                } hover:bg-gray-600`}
              >
                <td className="p-3 border-b border-gray-600 text-white">{transaction.date}</td>
                <td className="p-3 border-b border-gray-600 text-white">{transaction.transactionId}</td>
                <td className="p-3 border-b border-gray-600 text-white">{transaction.from}</td>
                <td className="p-3 border-b border-gray-600 text-white">{transaction.to}</td>
                <td className="p-3 border-b border-gray-600 text-white">{transaction.amount}</td>
                <td className="p-3 border-b border-gray-600 text-white">{transaction.department}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
