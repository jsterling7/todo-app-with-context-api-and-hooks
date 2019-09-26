import React, { useRef, useEffect } from 'react';


const Button = ({ title, size, disabled, type, onClick }) => {

    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.addEventListener('clicked', onClick);

        const buttonCurrent = buttonRef.current;

        return () => buttonCurrent.removeEventListener('clicked', onClick);
    }, [onClick]);

   return (
       <pal-button ref={buttonRef} size={size} disabled={disabled} type={type}>{title}</pal-button>
   )
};


export default Button;