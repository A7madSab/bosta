import { FC } from "react"
import Header from "layout/Header"
import Footer from "layout/Footer"

const Layout: FC = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
