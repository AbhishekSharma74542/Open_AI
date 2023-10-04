import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const CustomTable = (props: any) => {
  const { data } = props;

  const header = Object.keys(data[0]);
  const headerDef: any = header.map((i: any) => {
    return { field: i, headerName: i.toUpperCase(), flex: 1 };
  });

  return (
    <>
      <DataGrid
        getRowHeight={() => "auto"}
        getRowId={() => Math.floor(Math.random() * 100000000)}
        rows={data}
        columns={headerDef}
      />
    </>
  );
};

export default CustomTable;
