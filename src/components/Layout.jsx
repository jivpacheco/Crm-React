//import React from 'react';

import { Outlet } from "react-router-dom"

function layout() {
  return (
    <div>
        <h1 className="text-6xl font-bold"> CRM React</h1>
    

        <Outlet />
    </div>
  )
}

export default layout