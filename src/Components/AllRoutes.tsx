import React from 'react'
import {useRoutes} from "react-router-dom"
import Dashboard from './Dashboards/Dashboard'
import Homescreen from "./Homescreen"



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
])
  return element
}

export default AllRoutes