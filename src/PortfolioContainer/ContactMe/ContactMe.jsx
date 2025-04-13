import React, { Fragment } from 'react'

const ContactMe = () => {
    const a = 234; 
    const b = "ssss"

  return (
    // !for more than one html tags we need fragment tag
   <Fragment>
        <div>ContactMe</div>
        <h1>{a}</h1>
   </Fragment>
    
  )
}

export default ContactMe