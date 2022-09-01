import { Table } from "@app/components/molecules/index";
import { useOrdersTableProps } from "./useOrdersTableProps";

export const OrdersTable = () => {
  const [columns, data] = useOrdersTableProps();
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};
