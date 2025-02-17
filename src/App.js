import React from "react";
import { Themeprovider } from "./Usecontectex1/Themeprovider";
import Toggletheme from "./Usecontectex1/Toggletheme";
import Timerstartpause from './timerstartpause'
import GroupingProducts from './GroupingProducts'
import GenerateTable from './GenerataTable'
import CssTest from './Css'
import CartItemPriceAdd from './Cartitemraku'
import Pagination from './Pagination'
import Formhook from './Formhook'

function App() {

    //const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); // Example items

    //const items = Array.from({length: 50}, (_, i)=>`Items ${i+1}`) // for pagination project

    return (
        <div className="App">
           {/* <Themeprovider>
           <Timerstartpause/>
           </Themeprovider> */}
           {/* <Pagination itemsPerPage={10} items={items} /> */}
           <Formhook/>

           
        </div>
    );
}

export default App;
