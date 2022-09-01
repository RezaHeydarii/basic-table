import { OrdersTable } from "./components";

const HomePage = () => {
  return (
    <main className="py-4 px-5">
      <header>
        <h1>Orders</h1>
      </header>
      <section>
        <OrdersTable />
      </section>
    </main>
  );
};

export default HomePage;
