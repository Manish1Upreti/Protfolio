import React from 'react'
import Product from '../Product/Product';

const Home = (props) => {
    const arr = [1,2,3,4];
    
    return(
        <div>
            <div>Home</div>
            {arr.map((i) => (
                <Product value={i} key={i}/>
            ))}
        </div>
    )
  
}

export default Home