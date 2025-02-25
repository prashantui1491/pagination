// A Higher-Order Component (HOC) is a function that takes a component as input and returns a new enhanced component. 
// It allows code reuse, logic abstraction, and modifying component behavior without modifying the original component.

import React from 'react'

const withBorder = (Wrappedcomponent) => {
    return(props) => (
        <div style={{border: "1px solid red", padding: "10px", margin: "20px"}}>
            < Wrappedcomponent {...props} />
        </div>

    )
}

export default withBorder;