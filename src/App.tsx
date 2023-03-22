import React from "react";
import Allroutes from "./Components/AllRoutes";
import Routes from "./Components/RegisterRoutes/Routes";
import UserRoutes from "./Components/RegisterRoutes/UserRoutes";

const App = () => {
  return (
    <div>
      <Allroutes />
      <Routes />
      <UserRoutes />
    </div>
  );
};

export default App;
