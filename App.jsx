import React from "react";
import { 
  createBrowserRouter,
  RouterProvider} from "react-router-dom";
import LandingPage from "./routes/landingpage/landingpage"; // Ensure the case matches your file name
import Home from "./routes/home/home"; // Assuming you have a Home component
import Layout from "./routes/layout/layout"; 
import SinglePage from "./routes/singlePage/singlePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "/home",
            element: <Home />
        }
        ,
        {
          path: "/:id",
            element: <SinglePage />
        }
      ]
    }
    // {
    //   path: "/home",
    //   element: <Home />,
    // },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
// <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <LandingPage />
       
    //   </div>
    // </div>