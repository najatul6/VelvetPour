import { createBrowserRouter } from "react-router";
import HomeLayout from "../homelayout/HomeLayout";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"",
        element:<Home/>
      }
    ]
  },
]);
export default Routes;