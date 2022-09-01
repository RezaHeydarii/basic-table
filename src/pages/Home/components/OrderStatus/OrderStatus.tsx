import { useMemo } from "react";

interface Props {
  status: OrderStatusType;
  className?: string;
}

export const OrderStatus = (props: Props) => {
  const { status, className } = props;

  const badgeColor = useMemo<string>(() => {
    switch (status) {
      case "Await":
        return "bg-warning";
      case "Canceled":
        return "bg-danger";
      case "Delivered":
        return "bg-success";
      case "Draft":
        return "bg-grey";
      default:
        return "";
    }
  }, [status]);
  return (
    <div className={[className, "d-flex align-items-center"].join(" ")}>
      <div
        className={[badgeColor, "rounded-circle"].join(" ")}
        style={{ width: "10px", height: "10px" }}
      />
      <p style={{ marginLeft: "5px" }}>{status}</p>
    </div>
  );
};
