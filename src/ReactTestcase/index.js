import React from 'react';

function SimpleButton({ onClick, label }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default SimpleButton;
