import { Suspense } from "react";
import { AppRoutes } from "./AppRoutes";
import "./styles/index.scss";

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <AppRoutes />
      </Suspense>
    </div>
  );
}

export default App;
