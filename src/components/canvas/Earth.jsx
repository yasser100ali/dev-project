import React from 'react'; 
import myImage from '../../assets/painting.jpg'; // Adjusted relative path

const EarthCanvas = () => {
  return (
    <div>
      <img src={myImage} alt="Description" />
    </div>
  );
}

export default EarthCanvas;