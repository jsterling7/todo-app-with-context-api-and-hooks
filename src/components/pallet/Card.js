import React from 'react';


const Card = ({ children }) => (
    <pal-card flat>
      <div slot="body">
        {children}
      </div>
    </pal-card>
);


export default Card;