import { ComponentProps } from "react";

import { Meta, Story } from "@storybook/react";

import { Table } from "./Table";

export default {
  title: "Components/molecules/Table",
  component: Table,
} as Meta;

const Template: Story<ComponentProps<typeof Table>> = (args) => (
  <Table {...args} />
);

export const NormaTable = Template.bind({});
NormaTable.args = {
  columns: [
    { accessor: "name", Header: "Name" },
    { accessor: "family", Header: "Family" },
    {
      accessor: "status",
      Header: "Status",
      Cell: ({ value }: any) => (
        <div className="d-flex">
          <div
            className={[
              value ? "bg-primary" : "bg-secondary",
              "text-white px-2 rounded",
            ].join(" ")}
          >
            {value ? "Active" : "Disabled"}
          </div>
        </div>
      ),
    },
  ],
  data: [
    { name: "Reza", family: "Heydari", status: 0 },
    { name: "Test", family: "Testi", status: 1 },
    { name: "Johny", family: "Cash", status: 0 },
  ],
};
