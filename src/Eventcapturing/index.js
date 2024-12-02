import React from 'react';

const EventCapturing = () => {
    const handleParentClick = () => {
        console.log("Parent clicked (capturing)");
    };

    const handleChildClick = (e) => {
        console.log("Child clicked (capturing)");
    };

    return (
        <div
            id="parent"
            onClickCapture={handleParentClick} // Capturing phase
        >
            <h2>Parent</h2>

            <div
                id="child"
                onClickCapture={handleChildClick} // Capturing phase
            >
                <h2>Child</h2>
            </div>
        </div>
    );
};

export default EventCapturing;
