import React from 'react'
const AutoList = ({ autos }) => {
    return autos.map(a => 
    <div>
      <h6>{a.organization}</h6>
      <h6>{a.maxRating}</h6>
    </div>);
  };
  export default AutoList;