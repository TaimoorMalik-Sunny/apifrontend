// components/Card.tsx

import React, { useState } from 'react';

interface CardProps {
  amount: string;
  amountInUSD: string;
  plan: string;
  details: { label: string; value: string }[];
}

const Card: React.FC<CardProps> = ({ amount, amountInUSD, plan, details }) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`border ${isChecked ? 'border-blue-400' : 'border-gray-200'} rounded-lg p-4 shadow-md relative`}>
      <div className="absolute top-2 right-2 rounded-lg">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox h-6 w-6 text-blue-600"
        />
           {/* <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="h-6 w-6 appearance-none rounded-full border-2 border-gray-300 checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
          /> */}
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">{amount}</h2>
          <p className="text-gray-500">{amountInUSD}</p>
        </div>
        <div className="text-blue-500">
      
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{plan}</p>
        <p className="text-gray-500 mb-4">Paid in full by maturity</p>
        <ul>
          {details.map((detail, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="flex-grow">{detail.label}</span>
              <span className="text-gray-500">{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
