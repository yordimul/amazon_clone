import React from 'react'
import { Rating } from '@mui/material';
import Currency from '../Currencyformatter/Currencyt';
import  classes from './product.module.css'

export default function card({data}) {
  return (
    <div className={classes.card_cont}> 
        <h3>{data.title}</h3>
        <a href="">
            <img src={data.image} alt={data.category} />
        </a>
        <div className={classes.rating}>
            {/* discr */}
           <Rating value={data.rating.rate} precision={0.1}/>
           <small>{data.rating.count}</small>
        </div>
        <div>
            <Currency amount={data.price}/>
        </div>
        <button className={classes.button}>add to cart</button>

    </div>
  )
}
