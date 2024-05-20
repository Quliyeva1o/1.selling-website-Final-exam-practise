import { Outlet } from "react-router-dom"
import Header from "../Layout/Header"
import Footer from "../Layout/Footer/inex"

const RouterPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}

export default RouterPage
