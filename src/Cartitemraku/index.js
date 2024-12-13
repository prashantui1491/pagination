import React, {useState} from 'react'

const CartItemPriceAdd = () =>{


    const initialData = [
        {
          name: "capsicum",
          price: 48,
          id: 1,
          count: 0,
          totalPrice: 0,
        },
        {
          name: "onion",
          price: 50,
          id: 2,
          count: 0,
          totalPrice: 0,
        },
      ]
    
    const quantityInKg = [1,2,3,4,5,6]

    const [data, setData] = useState([])
    const [quantity, setQuantity] = useState({})
    const [menuItems, setMenuItem] = useState(initialData)

    const handleQuantityChange = (e, id) => {
        setQuantity({
            ...quantity,
            [id]: parseInt(e.target.value) || 0
         })
    }

    const handleIncrement = (id) => {
        const updatedIncrementCount = menuItems.map((item)=>{
            if(item.id === id){
                return{
                    ...item,
                    count: item.count + 1
                }
            }

            return item
        })
        setMenuItem(updatedIncrementCount)
    }

    const handleDecrementCoount = (id) =>{
        const updatedDecrmeentCount = menuItems.map((item)=>{
            if(item.id === id && item.count >0){
                return{
                    ...item,
                    count: item.count - 1
                }
            }

            return item
        })

        setMenuItem(updatedDecrmeentCount)
    }

    const handleAddCart = (id) =>{

        const selectedItem = menuItems.find((item)=> item.id === id)

        const totalPrice = quantity[id] * selectedItem.price * selectedItem.count

        setData([
            ...data,
            {
                id: selectedItem.id,
                name: selectedItem.name,
                totalPrice: totalPrice,
                quantity: quantity[id],
                count: selectedItem.count,
                price: selectedItem.price
            }
        ])
    }

    console.log(data, "data")

    return(
        <div>

            <h1>Cart Item Selection</h1>
            {
                menuItems && menuItems.map((item)=>(
                    <ul>
                        <li key={item.id} style={{listStyle: "none", marginBottom: "5px"}}>{item.name}</li>
                        <select style={{marginRight: "20px"}} value = {quantity[item.id] || ""} onChange={(e)=>handleQuantityChange(e, item.id)}>
                            <option>Select Qantity</option>
                            {
                                quantityInKg && quantityInKg.map((kg)=>(
                                    <option value={kg}>{kg}</option>
                                ))
                            }

                        </select>
                        <button style={{marginRight: "20px", marginLeft: "20px"}} onClick={()=>handleDecrementCoount(item.id)}>-</button>
                        {item.count}
                        <button style={{marginRight: "20px", marginLeft: "20px"}} onClick={()=>handleIncrement(item.id)}>+</button>
                        <button onClick={()=>handleAddCart(item.id)}>Add To cart</button>
                    </ul>
                ))
            }

        </div>
    )
}

export default CartItemPriceAdd