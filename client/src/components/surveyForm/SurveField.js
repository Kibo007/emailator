import React from 'react';

export default ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <input type="text" {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
