import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import {Layout, RequireLayout} from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import Profile from "./routes/profile/profile.jsx";
import Login from "./routes/login/login.jsx";
import Register from "./routes/register/register.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage.jsx";


function App() {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Layout />,
            children: [
                {
                    path:"/",
                    element: <HomePage />
                },
                {
                    path:"/list",
                    element:<ListPage />
                },
                {
                    path:"/:id",
                    element:<SinglePage />
                },
                {
                    path:"/login",
                    element:<Login/>
                },
                {
                    path:"/register",
                    element:<Register/>
                }
            ]
        },
        {
            path:'/',
            element: <RequireLayout />,
            children: [
                {
                    path:"/listings",
                    element:<Profile />
                },
                {
                    path:"/profile",
                    element:<ProfileUpdatePage />
                },
            ]
        }
    ])

    return (
      <RouterProvider router={ router }/>
    )
}

export default App
