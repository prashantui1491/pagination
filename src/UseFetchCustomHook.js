import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network call not ok");
                }
                return response.json();
            })
            .then(json => setData(json))
            .catch(error => console.log("Error:", error));
    }, [url]);

    return { data };
}

export default useFetch;
