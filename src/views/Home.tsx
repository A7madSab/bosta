import Grid from "@mui/material/Grid"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    root: {
        paddingTop: "80px",
    },
})

const Home = () => {
    const classes = useStyles()

    return <Grid className={classes.root}>Home Home</Grid>
}

export default Home
