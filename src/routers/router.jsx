import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/Books/CartPage";
import CheckoutPage from "../pages/Books/CheckoutPage";
import SingleBook from "../pages/Books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/Books/OrderPage";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";
import AdminRouter from "./AdminRouter";


 const router =createBrowserRouter([
    {
    path:"/",
    element:<App />,
    children:[
        {path:"/",element:<Home/>},
        {path:"/about",element:<h1>About</h1>},
        {path:"/orders",element:<PrivateRoute><OrderPage/></PrivateRoute>},
        {path:"/login",element:<Login/>},
        {path:"/register",element:<Register/>},
        {path:"/cart",element:<CartPage/>},
        {path:"/checkout",element:<PrivateRoute><CheckoutPage/></PrivateRoute>},
        {path:"/books/:id",element:<SingleBook/>}
    ]
    },
    {
        path:"/admin",
        element:<AdminLogin/>
    },
    {
        path:"/dashboard",
        element:<AdminRouter><DashboardLayout/></AdminRouter>,
        children:[
            {path:"",element:<AdminRouter><Dashboard/></AdminRouter>},
            {path:"add-new-book",element:<AdminRouter><AddBook/></AdminRouter>},
            {path:"edit-book/:id",element:<AdminRouter><UpdateBook/></AdminRouter>},
            {path:"manage-books",element:<AdminRouter><ManageBooks/></AdminRouter>},
            {path:"delete-book/:id",element:<AdminRouter><h1>Delete Book</h1></AdminRouter>}
        ]
    }

])

export default router;