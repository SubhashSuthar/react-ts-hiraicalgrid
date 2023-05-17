import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

interface DataFormat {
  format_name: string;
  format_code: string;
}

interface DataCategory {
  [key: string]: DataFormat[];
}

const App: React.FC = () => {
  const [rowData, setRowData] = useState<DataCategory>({
    currency: [
      {
        format_name: "Currency 1",
        format_code: "CUR1",
      },
      {
        format_name: "Currency 2",
        format_code: "CUR2",
      },
      // Add the remaining currency formats here
    ],
    date: [
      {
        format_name: "Date 1",
        format_code: "DT1",
      },
      {
        format_name: "Date 2",
        format_code: "DT2",
      },
      // Add the remaining date formats here
    ],
    numeric: [
      {
        format_name: "Numeric 1",
        format_code: "NUM1",
      },
      {
        format_name: "Numeric 2",
        format_code: "NUM2",
      },
      // Add the remaining numeric formats here
    ],
    time: [
      // Add the time formats here
    ],
    percentage: [
      // Add the percentage formats here
    ],
    custom: [
      // Add the custom formats here
    ],
  });

  const onDoubleClick = (params: any) => {
    console.log("Double clicked item:", params.node.data);
  };

  const createColumnDefs = () => {
    return [
      {
        field: "category",
        cellRenderer: "agGroupCellRenderer",
        cellRendererParams: {
          checkbox: false,
        },
        minWidth: 200,
      },
      {
        field: "format_name",
        minWidth: 200,
      },
      {
        field: "format_code",
        minWidth: 150,
      },
    ];
  };

  const createDefaultColDef = () => {
    return {
      flex: 1,
    };
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "500px", width: "800px" }}>
      <AgGridReact
        rowData={Object.entries(rowData).map(([category, formats]) => ({
          category,
          format_name: "",
          format_code: "",
          rowGroup: true,
        }))}
        groupDefaultExpanded={-1}
        autoGroupColumnDef={{
          minWidth: 250,
        }}
        onRowDoubleClicked={onDoubleClick}
        columnDefs={createColumnDefs()}
        defaultColDef={createDefaultColDef()}
      />
    </div>
  );
};

export default DataformatsView;
