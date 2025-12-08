import { Outlet } from "react-router";
import Header from "./components/layout/header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="app-content">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
