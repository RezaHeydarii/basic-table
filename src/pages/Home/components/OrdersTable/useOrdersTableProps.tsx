import { AvatarGroup } from "@app/components/atoms/index";
import { useMemo } from "react";
import type { Column } from "react-table";
import moment from "moment";
import { useOrders } from "@app/hooks/index";
import { OrderStatus } from "../OrderStatus/OrderStatus";
import { Link } from "react-router-dom";

export const useOrdersTableProps = () => {
  const orderList = useOrders();
  const columns = useMemo<Column<OrderType>[]>(
    () => [
      {
        accessor: "id",
        Header: "Order",
        Cell: ({ value, row }) => (
          <div>
            <p>{value}</p>
            <p className="text-black-50 fs-6">
              {moment(row.original.createdAt).format("MMM D ddd, HH:mm")}
            </p>
          </div>
        ),
      },
      {
        accessor: "customer",
        Header: "Customer",
        Cell: ({ value }) => <p>{value.fullName}</p>,
      },
      {
        accessor: "products",
        Header: "Products",
        Cell: ({ value }) => (
          <AvatarGroup
            avatars={value.map((v) => ({ src: v.image, alt: v.name }))}
            limit={2}
          />
        ),
      },
      {
        accessor: "status",
        Header: "Status",
        Cell: ({ value }) => <OrderStatus status={value} />,
      },
      {
        accessor: "totalPrice",
        Header: "TotalPrice",
        Cell: ({ value }) => (
          <div>
            <p>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}$</p>
          </div>
        ),
      },
      {
        accessor: "deliveryDate",
        Header: "Delivery Date",
        Cell: ({ value }) => (
          <div>
            <p>{moment(value).format("MM/DD/yyyy")}</p>
          </div>
        ),
      },
      {
        accessor: (data) => data.id,
        id: "details",
        Header: "",
        Cell: ({ value }: any) => (
          <Link to={`/order/${value}`}>
            <button className="bg-transparent border-0 text-info">
              Details
            </button>
          </Link>
        ),
      },
    ],
    []
  );
  const data = useMemo<OrderType[]>(() => orderList, [orderList]);

  return [columns, data] as const;
};
