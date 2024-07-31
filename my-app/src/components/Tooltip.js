
import React from 'react';
import './Tootip.css'; // Correct the spelling here if it's a typo

function Tooltip({ content }) {
  return (
    <div className="tooltip-container">
      <i className="fas fa-info-circle"></i> {/* Example icon */}
      <div className="tooltip-box">
        {content}
      </div>
    </div>
  );
}

export default Tooltip;




// import React, { useState } from 'react';
// import './Tootip.css'; // Make sure to import custom CSS


// function Tooltip({ content }) {  // Accepting content as a prop
//     const [isHovered, setIsHovered] = useState(false);
  
//     return (
//       <div 
//         className="tooltip-container"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <i className="fas fa-info-circle"></i> {/* Example icon */}
//         {isHovered && (
//           <div className="tooltip-box">
//             {content}
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default Tooltip;
