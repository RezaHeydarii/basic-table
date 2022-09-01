/* eslint-disable react/jsx-key */
import { useTable, Column } from "react-table";
import BTable from "react-bootstrap/Table";

interface TableProps<DataType extends object> {
  columns: Column<DataType>[];
  data: DataType[];
}

export const Table = <DataType extends object>(props: TableProps<DataType>) => {
  const { columns, data } = props;
  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable<DataType>({
      data,
      columns,
    });
  return (
    <div>
      <div className="bg-white p-4 overflow-scroll">
        <BTable borderless {...getTableProps()}>
          <thead className="border-bottom">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className="align-middle" {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </BTable>
      </div>
      <p className="text-black-50 mt-2" style={{ textAlign: "right" }}>
        Showing 5 of 5 Orders
      </p>
    </div>
  );
};
