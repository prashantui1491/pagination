import React, {useState} from "react";

const Card1 = () => {

    const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at 
  mauris nunc. Fusce convallis, ligula eu tincidunt feugiat, turpis justo 
  condimentum quam, ut posuere lectus turpis sed erat. Aenean fermentum 
  urna nec semper gravida. Vivamus laoreet est id magna tempus, ac 
  vestibulum ipsum hendrerit. Suspendisse potenti.`;

  const [showMOre, setShowMore] = useState(false)

  const handleshowMore = () => {
    setShowMore(!showMOre)
  }

  return(
    <div style={{width: "400px", padding: "20px", border: "1px solid black", borderRadius: "10px"}}>

        <p>{showMOre ? paragraphText : paragraphText.slice(0, 100)+ "..."}</p>
        <button onClick={handleshowMore}>{showMOre ? "Read less" : "Read more"}</button>

    </div>
  )
}

export default Card1