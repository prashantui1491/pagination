import React from "react";
import DisplayFetchedInfo from "./DisplayFetchedInfo"
import TableWithFormValidation from './AppFormInputs'
import ToggleTodo from "./AppCompleted"
import FormInputs from "./FormInputProjects/index"
import KanbanBoard from "./kanbancard/index";
import KanbanBoard1 from "./Kanbancardp1";
import LazyLoading from './LazyLoading/index'
import SimpleButton from './ReactTestcase/index'
import Debouncing from "./Debouncing/index"


function App() {

    const handleClick = () =>{
        alert("button Clicked")

    }
    return (
        <div className="App">
            {/* <FormInputs/> */}
            {/* <TableWithFormValidation/> */}
            {/* <KanbanBoard/> */}
            {/* <FormInputs/> */}
            {/* <KanbanBoard1/> */}
            {/* <LazyLoading/> */}
            {/* <SimpleButton onClick={handleClick} label={"Submit"}/> */}
            {/* <Debouncing/> */}
            <ToggleTodo/>


        </div>
    );
}

export default App;
