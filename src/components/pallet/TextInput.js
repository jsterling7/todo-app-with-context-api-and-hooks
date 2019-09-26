import React from 'react';


const TextInput = ({value, placeholder, textInputRef}) => (
        <pal-text-input ref={textInputRef} placeholder={placeholder}></pal-text-input>
);


export default TextInput;