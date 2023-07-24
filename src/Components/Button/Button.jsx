import React from 'react';
import '../../styles/style.css'

export default function Button({ className, socialIcon, border, text, color }) {
  return (
    <button className={className} border={border} color={color}>
        <img className='icons' src={socialIcon} alt='Icon' />
      <p>{text}</p>
    </button>
  );
}