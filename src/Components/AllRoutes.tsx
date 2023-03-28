import React from 'react'
import {useRoutes} from "react-router-dom"
import Dashboard from './Dashboards/Dashboard'
import Payments from './Dashboards/payments'
import Product from './Dashboards/Product'
import Homescreen from "./Homescreen"
import Transaction from "./Dashboards/Transaction"
import Staffdash from "./StaffDashboard/Staffdash"
import Cardpay from "../Components/StaffDashboard/Cardpay"
import Schoolfees from "./StaffDashboard/Schoolfees"
import Travel from './StaffDashboard/Travel'
import Rents from "./StaffDashboard/Rents"
import Withdraw from './StaffDashboard/Withdraw'



const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <Homescreen />,
      },
      {
            path: "/dashboard",
            element: <Dashboard />,
      },
      {
            path: "/staffs",
            element: <Product />,
      },
      {
            path: "/payroll",
            element: <Payments />,
          },
      {
            path: "/transaction",
            element: <Transaction />,
          },
      {
            path: "/staffdashboard",
            element: <Staffdash />,
          },
      {
            path: "/payment",
            element: <Cardpay />,
          },
      {
            path: "/schoolfees",
            element: <Schoolfees />,
          },
      {
            path: "/Travel",
            element: <Travel />,
          },
      {
            path: "/Rent",
            element: <Rents />,
          },
      {
            path: "/withdraw",
            element: <Withdraw />,
          },
])
  return element
}

export default AllRoutes