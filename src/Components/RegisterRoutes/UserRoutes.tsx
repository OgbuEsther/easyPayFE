import React from "react";
import { useRoutes } from "react-router-dom";
import OptionSignin from "../Homeview/Auth/Staff/OptionSignin";
import OptionSignup from "../Homeview/Auth/Staff/OptionSignup";

import StaffSignin from "../Homeview/Auth/Staff/StaffSignin";
import StaffSignup from "../Homeview/Auth/Staff/StaffSignup";

const UserRoutes = () => {
  let element = useRoutes([
    {
      path: "/user/signup",
      element: <StaffSignup />,
    },
    {
      path: "/optionsignup",
      element: <OptionSignup />,
    },
    {
      path: "/optionsignin",
      element: <OptionSignin />,
    },
    {
      path: "/user/signin",
      element: <StaffSignin />,
    },
  ]);
  return element;
};

export default UserRoutes;
