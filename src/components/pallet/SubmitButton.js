import React from 'react';


const SubmitButton = ({ title, size, disabled, type }) => (
        <pal-button size={size} disabled={disabled} type={type} submit>{title}</pal-button>
);


export default SubmitButton;