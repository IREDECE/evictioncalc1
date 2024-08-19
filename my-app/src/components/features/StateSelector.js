import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StateSelectorStyle.css';
function StateSelector() {
    const navigate = useNavigate();
    const [selectedState, setSelectedState] = useState('');
    const childrenFacingEviction = 2900000;
    const totalPopulationThreatenedByEviction = 7600000;

    const [renterHouseholds, setRenterHouseholds] = useState(0);
    const [householdsNoChildren, setHouseholdsNoChildren] = useState(0);
    const [householdsWithChildren, setHouseholdsWithChildren] = useState(0);

    const adultsThreatenedByEviction = totalPopulationThreatenedByEviction - childrenFacingEviction;

    
    const [percentRenterHouseholds, setPercentRenterHouseholds] = useState(0);
    const [evictedRenterHouseholds, setEvictedRenterHouseholds] = useState(0);

  const stateData = {
    "Alabama": { households: 2339582, percentRenters: 0.1636, evictionRate: 0.0379 },
    "Alaska": { households: 329160, percentRenters: 0.1526, evictionRate: 0.0243 },
    // Add data for all states with population and eviction percentage
    "Arizona": { households: 3186554, percentRenters: 0.1982, evictionRate: 0.102 },
    "Arkansas": { households: 1395735, percentRenters: 0.184, evictionRate: 0.0094 },
    "California": { households: 14627041, percentRenters: 0.302, evictionRate: 0.0322 },
    "Colorado": { households: 2590205, percentRenters: 0.2152, evictionRate: 0.0653 },
    "Connecticut": { households: 1540292, percentRenters: 0.201, evictionRate: 0.0484 },
    "Delaware": { households: 465804, percentRenters: 0.1449, evictionRate: 0.1365 },
    "District of Columbia": { households: 360862, percentRenters: 0.3925, evictionRate: 0.1505 },
    "Florida": { households: 10257553, percentRenters: 0.1981, evictionRate: 0.0561 },
    "Georgia": { households: 4539156, percentRenters: 0.198, evictionRate: 0.1666 },
    "Hawaii": { households: 568058, percentRenters: 0.2305, evictionRate: 0.0107 },
    "Idaho": { households: 796968, percentRenters: 0.1692, evictionRate: 0.0304 },
    "Illinois": { households: 5452461, percentRenters: 0.1968, evictionRate: 0.036 },
    "Indiana": { households: 2977176, percentRenters: 0.1818, evictionRate: 0.0822 },
    "Iowa": { households: 1438456, percentRenters: 0.1524, evictionRate: 0.0402 },
    "Kansas": { households: 1292571, percentRenters: 0.1872, evictionRate: 0.0351 },
    "Kentucky": { households: 2023679, percentRenters: 0.1889, evictionRate: 0.0637 },
    "Louisiana": { households: 2113178, percentRenters: 0.1826, evictionRate: 0.0234 },
    "Maine": { households: 751697, percentRenters: 0.117, evictionRate: 0.0301 },
    "Maryland": { households: 2559057, percentRenters: 0.2001, evictionRate: 0.339 },
    "Massachusetts": { households: 3036303, percentRenters: 0.2504, evictionRate: 0.0371 },
    "Michigan": { households: 4605363, percentRenters: 0.1408, evictionRate: 0.1426 },
    "Minnesota": { households: 2547867, percentRenters: 0.1244, evictionRate: 0.0324 },
    "Mississippi": { households: 1342764, percentRenters: 0.1645, evictionRate: 0.1422 },
    "Missouri": { households: 2826295, percentRenters: 0.1906, evictionRate: 0.0576 },
    "Montana": { households: 529167, percentRenters: 0.1696, evictionRate: 0.0168 },
    "Nebraska": { households: 863831, percentRenters: 0.1842, evictionRate: 0.0347 },
    "Nevada": { households: 1328788, percentRenters: 0.2829, evictionRate: 0.0855 },
    "New Hampshire": { households: 648571, percentRenters: 0.1553, evictionRate: 0.0523 },
    "New Jersey": { households: 3785097, percentRenters: 0.2248, evictionRate: 0.1019 },
    "New Mexico": { households: 956743, percentRenters: 0.168, evictionRate: 0.0596 },
    "New York": { households: 8585784, percentRenters: 0.2622, evictionRate: 0.0907 },
    "North Carolina": { households: 4892627, percentRenters: 0.1947, evictionRate: 0.1055 },
    "North Dakota": { households: 377722, percentRenters: 0.1693, evictionRate: 0.0081 },
    "Ohio": { households: 5293227, percentRenters: 0.2039, evictionRate: 0.0666 },
    "Oklahoma": { households: 1776732, percentRenters: 0.1882, evictionRate: 0.0539 },
    "Oregon": { households: 1859349, percentRenters: 0.2421, evictionRate: 0.038 },
    "Pennsylvania": { households: 5815191, percentRenters: 0.1703, evictionRate: 0.061 },
    "Rhode Island": { households: 486017, percentRenters: 0.2259, evictionRate: 0.0554 },
    "South Carolina": { households: 2446680, percentRenters: 0.1551, evictionRate: 0.1673 },
    "South Dakota": { households: 408009, percentRenters: 0.1666, evictionRate: 0.0096 },
    "Tennessee": { households: 3144583, percentRenters: 0.1984, evictionRate: 0.0661 },
    "Texas": { households: 12135376, percentRenters: 0.2233, evictionRate: 0.0585 },
    "Utah": { households: 1228707, percentRenters: 0.178, evictionRate: 0.0291 },
    "Vermont": { households: 338998, percentRenters: 0.1251, evictionRate: 0.0182 },
    "Virginia": { households: 3685233, percentRenters: 0.2098, evictionRate: 0.1102 },
    "Washington": { households: 3313479, percentRenters: 0.2326, evictionRate: 0.0215 },
    "West Virginia": { households: 861686, percentRenters: 0.1538, evictionRate: 0.0535 },
    "Wisconsin": { households: 2770355, percentRenters: 0.1488, evictionRate: 0.036 },
    "Wyoming": { households: 277106, percentRenters: 0.1686, evictionRate: 0.036 },
    "United States": { households: 270000000, percentRenters: 1, evictionRate: 0.01 },
  };
  const handleChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    if (state && stateData[state]) {

        const { households, percentRenters, evictionRate } = stateData[state];
        const totalRenterHouseholds = Math.round(households * percentRenters);
        const totalEvictedRenterHouseholds = Math.round(totalRenterHouseholds * evictionRate);
        setEvictedRenterHouseholds(totalEvictedRenterHouseholds);
        setPercentRenterHouseholds(percentRenters * 100);  // Convert to percentage for display
        setRenterHouseholds(totalRenterHouseholds);

        const noChildren = Math.round(totalEvictedRenterHouseholds * 0.47);
        const withChildren = totalEvictedRenterHouseholds - noChildren;
        setHouseholdsNoChildren(noChildren);
        setHouseholdsWithChildren(withChildren);
    } else {
      setPercentRenterHouseholds(0);
      setEvictedRenterHouseholds(0);
      setRenterHouseholds(0);

      setHouseholdsNoChildren(0);
      setHouseholdsWithChildren(0);
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
                <>
                    <p>The number of households in {selectedState} is {stateData[selectedState].households.toLocaleString()}, of which {percentRenterHouseholds.toFixed(2)}% are renter households, totaling {renterHouseholds.toLocaleString()} households.</p>
                    <p>Of these renter households, {evictedRenterHouseholds.toLocaleString()} are facing eviction, which is {stateData[selectedState].evictionRate * 100}% of the renter households.</p>
                    <p>47% of households with eviction filings do not have children.</p>
                    <p>Households without children: {householdsNoChildren.toLocaleString()}</p>
                    <p>Households with children: {householdsWithChildren.toLocaleString()}</p>
                    <p>The average evicted household size is calculated at 2.8 members, consisting of 1.2 adults listed in eviction filings, 0.5 adults unlisted, and 1.1 children under 18.</p>
                    <p>Total population threatened by eviction annually is 7.6 million, of which {childrenFacingEviction.toLocaleString()} are children, resulting in {adultsThreatenedByEviction.toLocaleString()} adults facing eviction.</p>
                </>
            )}
        </div>
    );
}
export default StateSelector;


//also include the percentage 
// In 2024 (2016), this would be xxx people facing eviction. *