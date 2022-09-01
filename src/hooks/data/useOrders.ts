const FakeOrderData: OrderType[] = [
  {
    id: "1234",
    createdAt: new Date().toString(),
    deliveryDate: new Date(2022, 10, 23).toString(),
    customer: {
      fullName: "reza heydari",
      id: "1",
    },

    products: [
      { id: "1", name: "best product" },
      { id: "2", name: "best product" },
    ],
    status: "Delivered",
    totalPrice: 2300,
  },
  {
    id: "12345",
    createdAt: new Date().toString(),
    deliveryDate: new Date(2022, 10, 28).toString(),
    customer: {
      fullName: "test test",
      id: "2",
    },

    products: [
      { id: "6", name: "best product2" },
      { id: "7", name: "best product2" },
      { id: "8", name: "best product3" },
      { id: "10", name: "best product5" },
    ],
    status: "Await",
    totalPrice: 1800,
  },
  {
    id: "123467",
    createdAt: new Date().toString(),
    deliveryDate: new Date(2022, 10, 29).toString(),
    customer: {
      fullName: "reza heydari",
      id: "1",
    },

    products: [
      { id: "1", name: "best product" },
      { id: "2", name: "best product" },
      { id: "3", name: "best product" },
      { id: "4", name: "best product" },
    ],
    status: "Canceled",
    totalPrice: 2300,
  },
  {
    id: "1234678",
    createdAt: new Date().toString(),
    deliveryDate: new Date(2022, 11, 23).toString(),
    customer: {
      fullName: "reza heydari",
      id: "1",
    },

    products: [
      { id: "1", name: "best product" },
      { id: "2", name: "best product" },
      { id: "3", name: "best product" },
      { id: "4", name: "best product" },
      { id: "5", name: "best product" },
    ],
    status: "Delivered",
    totalPrice: 2300,
  },
  {
    id: "123456789",
    createdAt: new Date().toString(),
    deliveryDate: new Date(2022, 11, 24).toString(),
    customer: {
      fullName: "reza heydari",
      id: "1",
    },

    products: [{ id: "1", name: "best product" }],
    status: "Delivered",
    totalPrice: 2300,
  },
];

export const useOrders = () => {
  return FakeOrderData;
};
