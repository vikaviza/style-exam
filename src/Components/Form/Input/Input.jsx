import React from "react";

export default function Input({ className, label, type, placeholder, icon }) {
    return (
        <div className={className}>
            <label>{label}</label>
            <div className="InpSection">
            <img className={'inpIcons'} src={icon} alt='icon' />
            <input
            type={type}
            placeholder={placeholder}
            />
            </div>
        </div>
    );
};