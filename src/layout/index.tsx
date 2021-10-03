import { FC } from "react"
import Grid from "@mui/material/Grid"
import { makeStyles } from "@mui/styles"
import Header from "layout/Header"
import Footer from "layout/Footer"
import Bottom from "layout/Bottom"

const useStyles = makeStyles({
    root: {
        paddingTop: "80px",
    },
})

const Layout: FC = ({ children }) => {
    const classes = useStyles()

    return (
        <div>
            <Header />
            <Grid className={classes.root}>{children}</Grid>
            <Footer />
            <Bottom />
        </div>
    )
}

export default Layout
