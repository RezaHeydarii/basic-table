import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

const AuthRoutes = () => {
  return (
    <Routes>
      {
        //no routes for now
      }
    </Routes>
  );
};

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export const AppRoutes = () => {
  const isAuth = true; //? no logic for now
  return <>{isAuth ? <MainRoutes /> : <AuthRoutes />}</>;
};
