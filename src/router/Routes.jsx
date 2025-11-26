import { createBrowserRouter } from "react-router";
import HomeLayout from "../homelayout/HomeLayout";
import Home from "../pages/Home";
import Error from "../error/Error";
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
  {
    path:"*",
    element: <Error></Error>
  }
]);
export default Routes;