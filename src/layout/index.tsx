import { FC } from "react"
import Header from "layout/Header"
import Footer from "layout/Footer"
import Bottom from "layout/Bottom"

const Layout: FC = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <Bottom />
        </div>
    )
}

export default Layout
