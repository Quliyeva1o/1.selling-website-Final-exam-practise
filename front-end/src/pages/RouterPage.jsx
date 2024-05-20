import { Outlet } from "react-router-dom"
import Header from "../Layout/Header"

const RouterPage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RouterPage
