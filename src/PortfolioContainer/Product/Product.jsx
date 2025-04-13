import React, { Fragment } from 'react'
    // useparams for dynamic routing
import {useParams} from "react-router-dom"

//   instesd of props we can directly send value as {value} and use as {just value}

const Product = (props) => {
    // const arr = [1,2,3,4,5];
    const params= useParams();
    // if condition 
    if (params.id) {
      return (
        <div>
            <h1>#{params.id}</h1>
            <h2>This is me!!</h2>
            {/* {arr.map((i)=>(
              <h1>{i}</h1>
            ))} */}
        </div>

  )
    }
    else
    {
      return (
        <div>
            <h1>{props.value}</h1>
            {/* {arr.map((i)=>(
              <h1>{i}</h1>
            ))} */}
        </div>

      )
    }

}

export default Product