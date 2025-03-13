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
import TableAgGrid from './AGgridtable/index'
import ToggleTodo from './Datafetchcompletedfilter/AppCompleted'
import WithoutThrottling from './Trottling/WithoutThrottling'
import WithThrottlinginbuilt from './Trottling/WithThrottlinginbuilt'
// import withBorder from "./Higherordercompo/HOC";
// import Message from "./Higherordercompo/Child";

// import MessagesProvider from './Usecontexttodo/MessagesProvider'
import AppleClientInterview from "./AppleClientInterview";

// const Enhancemessage = withBorder(Message)

import MessageProvider from './MessageProvider/MessageProvider'

import CounterProvider from './Counterappcontextreducer/CounterProvider'
import Formhook1 from "./Formhook/index1";
import Formhook2 from "./Formhook/index2";
import Card1 from './Readlessreadmore/index1'
import FilterComponent from './Custumfilter/filterComponent'
import PaginatedList from './Pagination1/index'
import Paginationtest1 from './Pagination1/index1'



const  App = () => {

    //const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); // Example items

    //const items = Array.from({length: 50}, (_, i)=>`Items ${i+1}`) // for pagination project

    return (
        <div className="App">
           {/* <Themeprovider>
           <Timerstartpause/>
           </Themeprovider> */}
           {/* <Pagination itemsPerPage={10} items={items} /> */}
          {/* <Enhancemessage text="Hi am from Higher orde component"/> */}

          {/* <MessagesProvider/> */}
            {/* <AppleClientInterview /> */}

        <Paginationtest1/>
           
        </div>
    );
}

export default App;
