import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// ✅ Import AG Grid Modules (Required for v33+)
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule, ValidationModule } from "ag-grid-community";

// ✅ Register the required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]);

const TableAgGrid = () => {
  // Column Definitions
  const [columnDefs] = useState([
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Age", field: "age", sortable: true, filter: true },
  ]);

  // Row Data
  const [rowData] = useState([
    { id: 1, name: "Prashant", age: 33 },
    { id: 2, name: "Shruthi", age: 32 },
    { id: 3, name: "Aarav", age: 6 },
  ]);

  const defaultColdef = useMemo(()=>{
    
  },[])
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>AG Grid Table</h1>
      <div className="ag-theme-alpine" style={{ height: "400px", width: "600px", margin: "auto" }}>
        <AgGridReact 
          columnDefs={columnDefs} 
          rowData={rowData} 
          pagination={true} 
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default TableAgGrid;
