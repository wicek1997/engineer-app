import React from 'react';

export const AlertBox = ({alert}) => {
  return(
    <div className="alert-box">
      <div className="alert">{alert.message}</div>
    </div>
  )
};