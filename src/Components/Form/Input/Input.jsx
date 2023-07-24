import React, {useState} from "react";
import '../../../styles/style.css'

export default function Input({ label, type, placeholder, icon }) {
    const [isFocused, setFocused] = useState(false);
    
    const FocusOn = () => {
        setFocused(true);
      };
    
      const FocusOff = () => {
        setFocused(false);
      };
    return (
        <div className={'regInput'}>
            <label>{label}</label>
            <div className={`InpSection ${isFocused ? 'focused' : ''}`}>
            <span>
            <img className={'inpIcons'} src={icon} alt='icon' />
            </span>
            <input
            type={type}
            placeholder={placeholder}
            onFocus={FocusOn}
            onBlur={FocusOff}
            />
            </div>
        </div>
    );
};