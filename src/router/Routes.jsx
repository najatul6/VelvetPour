import { createBrowserRouter } from "react-router";
import HomeLayout from "../homelayout/HomeLayout";
import Home from "../pages/Home";
import Error from "../error/Error";
import AboutUs from "../pages/AboutUs";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<AboutUs />
      },
    ]
  },
  {
    path:"*",
    element: <Error></Error>
  }
]);
export default Routes;