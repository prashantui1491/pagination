import React, {useState} from "react";

const CounterHOC = (ChildComponent) => {
    const HOC = (props) => {
        const [count, setCount] = useState(0);

        const handleIncrement = () => {
            setCount((prevState) => prevState + 1);
        };

        return (
            <div style={{ border: "1px solid red", padding: "5px", margin: "20px" }}>
                <ChildComponent {...props} count={count} handleIncrement={handleIncrement} />
            </div>
        );
    };

    return HOC;
};

export default CounterHOC