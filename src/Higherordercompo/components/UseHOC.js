import React from "react";

import CountMessage from "./CountMessge";
import HocComponent from './HocComponent'

const WithHocCount = HocComponent(CountMessage)

const UseHOC = () => {
    return (
        <div>
            <WithHocCount text="Hello"/>
        </div>
    )
}

export default UseHOC