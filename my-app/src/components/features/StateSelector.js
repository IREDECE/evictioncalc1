
import React, { useState } from 'react';
import './StateSelectorStyle.css';

function StateSelector() {
  const [selectedState, setSelectedState] = useState('');
  const [evictedPopulationSize, setEvictedPopulationSize] = useState(0);

  const stateData = {
    "Alabama": { population: 4900000, evictionPercentage: 0.05 },
    "Alaska": { population: 731545, evictionPercentage: 0.02 },
    // Add data for all states with population and eviction percentage
    "Wyoming": { population: 578759, evictionPercentage: 0.01 }
  };

  const handleChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    if (state && stateData[state]) {
      const evictionThreats = Math.round(stateData[state].population * stateData[state].evictionPercentage);
      setEvictedPopulationSize(evictionThreats);
    } else {
      setEvictedPopulationSize(0);  // Reset if no state is selected or data is missing
    }
  };

  return (
    <div>
      <label htmlFor="state-select">Choose your state:</label>
      <select id="state-select" value={selectedState} onChange={handleChange}>
        <option value="">Select a state</option>
        {Object.keys(stateData).map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      {selectedState && stateData[selectedState] && (
        <p>
          The population of {selectedState} in 2024 is {stateData[selectedState].population.toLocaleString()}, the percentage of people receiving an eviction filing in that state is {(stateData[selectedState].evictionPercentage * 100).toFixed(2)}%, which means {evictedPopulationSize.toLocaleString()} number of people are threatened by eviction in 2024.
        </p>
      )}
    </div>
  );
}

export default StateSelector;




//also include the percentage 

// In 2024 (2016), this would be xxx people facing eviction. *
