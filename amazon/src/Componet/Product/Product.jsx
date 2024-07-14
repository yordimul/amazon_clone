import { useState, useEffect } from 'react';
import Card from './card.jsx';
import  classes from './product.module.css'
function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className={classes.product_cont}>
        {data.map((item) => (
         <Card data={item} key={item.id}/>
        ))}
      
    </div>
  );
}
export default Product;
