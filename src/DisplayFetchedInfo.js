import React from "react";
import useFetch from "./UseFetchCustomHook";

function DisplayFetchedInfo() {
    const { data } = useFetch("https://dummyjson.com/todos?limit=10");

    return <div>Data: {JSON.stringify(data)}</div>;
}

export default DisplayFetchedInfo;
