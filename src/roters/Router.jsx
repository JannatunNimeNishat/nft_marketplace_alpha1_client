
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ConnectAWallate from "../pages/ConnectAWallate/ConnectAWallate";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Marketplace from "../pages/Marketplace/Marketplace";
import Rankings from "../pages/Rankings/Rankings";
import ArtistPage from "../pages/ArtistPage/ArtistPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/connect-a-Wallet',
          element:<ConnectAWallate></ConnectAWallate>
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/marketplace',
          element:<Marketplace></Marketplace>
        },
        {
          path:'/rankings',
          element:<Rankings></Rankings>
        },
        {
          path:'/artist_page/:id',
          element:<ArtistPage></ArtistPage>
        }
      ]
    },
  ]);

  export default router;