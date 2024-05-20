import AddItem from "../pages/AddItem";
import Basket from "../pages/Basket";
import Detail from "../pages/Detail";
import Home from "../pages/HomePage";
import RouterPage from "../pages/RouterPage";

export const router = [{
    path: "/",
    element: <RouterPage />,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"/add-item",
            element:<AddItem/>
        },
        {
            path:"/:id",
            element:<Detail/>
        },
        {
            path:"/basket",
            element:<Basket/>
        }

    ]

}]