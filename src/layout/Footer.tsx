import { useIntl } from "react-intl"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { makeStyles } from "@mui/styles"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"

const useStyles = makeStyles({
    root: {
        marginTop: "16px",
        padding: "16px 0px",
        backgroundColor: "#141414",
    },
    link: {
        textDecoration: "none",
    },
})

const Footer = () => {
    const classes = useStyles()
    const { formatMessage: f } = useIntl()

    return (
        <Box className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={6}>
                        <img src="/assets/logo/white-bosta-logo.svg" alt="white-bosta-logo" />
                        <a className={classes.link} href="mailto:help@bosta.co">
                            <Typography color="white">help@bosta.co</Typography>
                        </a>
                        <FacebookIcon sx={{ color: "#FFFFFF" }} />
                        <TwitterIcon sx={{ color: "#FFFFFF" }} />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h6" color="primary">
                            {f({ id: "Shipments" })}
                        </Typography>
                        <Typography color="white">{f({ id: "Our_Pricing" })}</Typography>
                        <Typography color="white">{f({ id: "Tracking_Shipment" })}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer
