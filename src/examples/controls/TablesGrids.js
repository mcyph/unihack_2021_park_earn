import Table from "../../controls/tables_grids/table/Table";
import TableBody from "../../controls/tables_grids/table/TableBody";
import TableCol from "../../controls/tables_grids/table/TableCol";
import TableRow from "../../controls/tables_grids/table/TableRow";
import TableHeader from "../../controls/tables_grids/table/TableHeader";
import TableHeaderCol from "../../controls/tables_grids/table/TableHeaderCol";
import TableFooter from "../../controls/tables_grids/table/TableFooter";

let TablesGrids=()=>{
  return <>
    <h2>Tables/Grids</h2>
    <h3>Tables</h3>
    <p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCol>Table Header Column 1</TableHeaderCol>
            <TableHeaderCol>Table Header Column 2</TableHeaderCol>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCol>Table Body Row 1</TableCol>
            <TableCol>Table Body Row 2</TableCol>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCol>Table Footer Row 1</TableCol>
            <TableCol>Table Footer Row 2</TableCol>
          </TableRow>
        </TableFooter>
      </Table>
    </p>
  </>;
}

export default TablesGrids;
