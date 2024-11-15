import React from "react";
import DisplayFetchedInfo from "./DisplayFetchedInfo";
import TableWithFormValidation from './AppFormInputs'
import ToggleTodo from "./AppCompleted";
import FormInputs from "./FormInputProjects/index"
import KanbanBoard from "./kanbancard/index";
import KanbanBoard1 from "./Kanbancardp1";


function App() {
    return (
        <div className="App">
            {/* <FormInputs/> */}
            {/* <TableWithFormValidation/> */}
            {/* <KanbanBoard/> */}
            {/* <FormInputs/> */}
            <KanbanBoard1/>

     
        </div>
    );
}

export default App;
