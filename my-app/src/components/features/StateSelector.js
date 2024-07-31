
import React, { useState } from 'react';
import './StateSelectorStyle.css';

function StateSelector() {
  const [selectedState, setSelectedState] = useState('');

  const states = [
    "United States in general", "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

    // Example data mapping states to number of households facing eviction
    const evictionData = {
        "Alabama": 12000,
        "Alaska": 800,
        // Add data for all states
        "Wyoming": 650
      };

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <label htmlFor="state-select">Choose your state:</label>
      <select id="state-select" value={selectedState} onChange={handleChange}>
        <option value="">Select a state</option>
        {Object.keys(evictionData).map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      {selectedState && (
        <p>The number of households facing eviction in {selectedState} is {evictionData[selectedState]}</p>
      )}
    </div>
  );
}

export default StateSelector;



//also include the percentage 

// In 2024 (2016), this would be xxx people facing eviction. *
