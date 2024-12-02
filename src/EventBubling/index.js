import React, { useState } from 'react'

const EventBubling = () => {

    const handleParentClick = () => {
        console.log("Parent clicked")
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
        console.log("Child clicked")
    }
    return (
        <div id="parent" onClick={handleParentClick}>

            <h2>Parent</h2>

            <div id="child" onClick={handleChildClick}>
                <h2>Child</h2>
            </div>

        </div>
    )
}

export default EventBubling