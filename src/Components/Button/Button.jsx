import React from 'react';

export default function Button({ socialIcon, border, text, color }) {
  return (
    <button className='socialButton' border={border} color={color}>
        <img className='Icons' src={socialIcon} alt='Icon' />
      <p>{text}</p>
    </button>
  );
}