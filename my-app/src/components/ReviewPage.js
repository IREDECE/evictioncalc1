import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './ReviewPage.css';

function ReviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;

  const handleCalculateClick = () => {
    navigate('/calculate', { state: { data } });  // Navigate to calculation page with data
  };

function handleGuidance(topic) {
    alert(`Guidance for ${topic}`);
}

  return (
    <div className="review-container">
      <div className="review-header">
        Review Your Information
      </div>

       <div className="review-section">
        <div className="review-title">Percentage of evictions leading to shelter needs</div>
        <div className="review-data">
          <span className="review-label">Percentage:</span>
          <span className="review-value">{data.evictionPercentage}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('evictionPercentage')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Cost per bed per year in shelters</div>
        <div className="review-data">
          <span className="review-label">Cost:</span>
          <span className="review-value">{data.dailyCost}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('dailyCost')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average days a homeless person stays in shelter</div>
        <div className="review-data">
          <span className="review-label">Days:</span>
          <span className="review-value">{data.shelterDays}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('shelterDays')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Percentage of homeless individuals utilizing ER services</div>
        <div className="review-data">
          <span className="review-label">Percentage:</span>
          <span className="review-value">{data.ERpercent}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('ERpercent')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Percentage of ER visits by non-homeless individuals</div>
        <div className="review-data">
          <span className="review-label">Percentage:</span>
          <span className="review-value">{data.ERonlyhomeless}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('ERonlyhomeless')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average cost of an ER visit per day</div>
        <div className="review-data">
          <span className="review-label">Cost:</span>
          <span className="review-value">{data.dailyERCost}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('dailyERCost')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average number of ER visits per year</div>
        <div className="review-data">
          <span className="review-label">Visits:</span>
          <span className="review-value">{data.averageERVisit}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('averageERVisit')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Percentage of homeless individuals using inpatient care</div>
        <div className="review-data">
          <span className="review-label">Percentage:</span>
          <span className="review-value">{data.icPercent}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('icPercent')}>Guidance</button> */}
        </div>
      </div>


      <div className="review-section">
        <div className="review-title">Percentage of inpatient care visits by homeless individuals that would not occur if not homeless (Inpatient)</div>
        <div className="review-data">
          <span className="review-label">Percentage:</span>
          <span className="review-value">{data.IConlyhomeless}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('IConlyhomeless')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average daily cost of an inpatient hospital visit</div>
        <div className="review-data">
          <span className="review-label">Cost:</span>
          <span className="review-value">{data.icCost}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('icCost')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average number of days a homeless person stays in inpatient care</div>
        <div className="review-data">
          <span className="review-label">Days:</span>
          <span className="review-value">{data.icDays}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('icDays')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Percentage of homeless families who received child welfare services</div>
        <div className="review-data">
          <span className="review-label">Percentage:</span>
          <span className="review-value">{data.fosterPercent}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('fosterPercent')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average per person per year cost of foster care</div>
        <div className="review-data">
          <span className="review-label">Cost:</span>
          <span className="review-value">{data.fcCost}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('fcCost')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average length a child stays in foster care</div>
        <div className="review-data">
          <span className="review-label">Years:</span>
          <span className="review-value">{data.fcStay}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('fcStay')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Percentage of homeless children who used ER in the past year</div>
        <div className="review-data">
          <span className="review-label">Percentage:</span>
          <span className="review-value">{data.childErPercent}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('childErPercent')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average cost of ER visit for a child</div>
        <div className="review-data">
          <span className="review-label">Cost:</span>
          <span className="review-value">{data.childErCost}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('childErCost')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average number of times a child visits ER in a year</div>
        <div className="review-data">
          <span className="review-label">Frequency:</span>
          <span className="review-value">{data.childErFreq}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('childErFreq')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Percentage of homeless youth who are arrested after being homeless</div>
        <div className="review-data">
          <span className="review-label">Percentage:</span>
          <span className="review-value">{data.childArrestPercent}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('childArrestPercent')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average cost per day of juvenile detention</div>
        <div className="review-data">
          <span className="review-label">Cost:</span>
          <span className="review-value">{data.childArrestCost}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('childArrestCost')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Average number of days a child remains in juvenile detention</div>
        <div className="review-data">
          <span className="review-label">Days:</span>
          <span className="review-value">{data.childArrestDays}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('childArrestDays')}>Guidance</button> */}
        </div>
      </div>

      <div className="review-section">
        <div className="review-title">Cost per person per year for encampment</div>
        <div className="review-data">
          <span className="review-label">Cost:</span>
          <span className="review-value">{data.avgEncampCost}</span>
          {/* <button className="guidance-button" onClick={() => handleGuidance('avgEncampCost')}>Guidance</button> */}
        </div> 
      </div>
      
      <button onClick={handleCalculateClick}>Calculate</button>

        {/* Continue adding other sections similarly */}
      {/* Additional sections can be added similarly */}
    </div>
  );

//   return (
//     <div>
//       <h1>Review Your Information</h1>
//       <p>evictionPercentage: {data.evictionPercentage}</p>
//       <p>dailyCost: {data.dailyCost}</p>
//       {/* Display other fields as necessary */}
//     </div>
//   );
}

export default ReviewPage;