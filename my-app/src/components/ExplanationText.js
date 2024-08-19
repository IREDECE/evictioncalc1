
import React from 'react';

import './ExplanationText.css';


function ExplanationText({ title, text, lists, subcategories, imgSrc, calculations, referenceRange }) {
  return (
    <div style={{ marginTop: '20px', marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h3 style={{ color: '#333' }}>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
      {lists && lists.map((item, index) => (
        <ul key={index} style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          {item.map((subItem, subIndex) => (
            <li key={subIndex} style={{ marginBottom: '10px' }}>{subItem}</li>
          ))}
        </ul>
      ))}
      {subcategories && subcategories.map((sub, index) => (
        <div key={index} style={{ marginTop: '10px', paddingLeft: '20px', borderLeft: '3px solid #007BFF', backgroundColor: '#e6f4ff' }}>
          <h4 style={{ color: '#333' }}>{sub.title}</h4>
          <p>{sub.text}</p>
        </div>
      ))}
      {calculations && (
        <div className="calculation-container">
          <h4>Calculation:</h4>
          <div dangerouslySetInnerHTML={{ __html: calculations }}></div>
        </div>
      )}
      {imgSrc && <img src={imgSrc} alt="Explanation visual" className="explanation-img" />}
      {referenceRange && (
        <div className="reference-range">
          <h4>Reference Range:</h4>
          <p>{referenceRange}</p>
        </div>
      )}
    </div>
  );
}

export default ExplanationText;



//suggested range
//reference range 
//calculation sheet - inflation adjust

//online link to inflation calculator

//about the color indent