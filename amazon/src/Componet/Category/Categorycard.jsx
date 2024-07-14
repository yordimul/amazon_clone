import React from 'react';
import classes from './category.module.css'

export default function Categorycard({ info }) {
  return (
    < >
    <div className={classes.category}>
    
      <p>{info.titel}</p>
     <a href="">
        <img src={info.image} alt={info.Name} />
        <span>shop now</span>
      </a>
     
    </div>
    
    </>
  );
}
