import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import CardDetails from "../Pages/CardDetails/CardDetails";
import SelectedEstate from "../Pages/SelectedEstate/SelectedEstate";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "../layouts/PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPages></ErrorPages>,
      children: [
        {
          path: "/",
          loader: ()=> fetch("/data.json"),
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/cardDetails/:id",
          loader: ()=> fetch("/data.json"),
          element: <PrivateRoute> <CardDetails></CardDetails> </PrivateRoute>
        },
        {
          path: "/selectedEstate",
          element: <PrivateRoute> <SelectedEstate></SelectedEstate> </PrivateRoute>
        },
        {
          path: "/profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: "/updateProfile",
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
      ]
    },
  ]);

  export default router;