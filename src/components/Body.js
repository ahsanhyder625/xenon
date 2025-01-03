import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./Sidebar";
import Databot from "./Databot";
import Datavisual from "./Datavisual";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex min-h-screen overflow-y-hidden">
          <Sidebar />
          <div className="flex-1 pr-4">
            <Databot />
          </div>
        </div>
      ),
    },
    {
      path: "/dvisual",
      element: (
        <div className="flex min-h-screen overflow-y-hidden">
          <Sidebar />
          <div className="flex-1 pr-4">
            <Datavisual />
          </div>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
