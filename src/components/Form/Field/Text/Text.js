import React from 'react';

export const Text = ({name, label, innerRef, errors = [], help = "", placeholder=""}) => {
  return(
    <div className="form-widget text">
      { label && <label htmlFor="" className="form-label"></label> }
      <input type="text" ref={innerRef} className="form-control" name={name} id={name} placeholder={placeholder} />
      { help && <div className="form-help">{help}</div> }
      { errors.length > 0 && <ul className="form-errors">{errors.map((error, index) => <li key={index}>{error}</li>)}</ul> }
    </div>
  )
}