import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useIntl } from "react-intl"
import axios from "axios"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { makeStyles } from "@mui/styles"
import Tracking from "component/Tracking"
import { Shipment } from "types/shipment"
import { formateDate } from "helpers"

const useStyles = makeStyles({
    card: {
        padding: "16px",
        margin: "80px 0px",
        borderRadius: "10px",
    },
})

const Home = () => {
    const classes = useStyles()
    const { search } = useLocation()
    const [shipment, useShipment] = useState<null | Shipment>(null)
    const { formatMessage: f } = useIntl()
    const trackingNumber = search?.split("=")[1]
    console.log("search shipment", { trackingNumber, search, shipment })

    useEffect(() => {
        ;(async () => {
            console.log("hello")
            if (trackingNumber) {
                const { data } = await axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
                useShipment(data)
            }
        })()
    }, [trackingNumber])

    return (
        <Grid container>
            {!shipment && (
                <Container maxWidth="md">
                    <Card className={classes.card}>
                        <Tracking />
                    </Card>
                </Container>
            )}

            {shipment && (
                <Grid container>
                    <Grid item xs={3}>
                        <Typography>
                            {f({ id: "Shipment_No" })}. {shipment?.TrackingNumber}
                        </Typography>
                        <Typography>{f({ id: shipment?.CurrentStatus?.state })}</Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography>{f({ id: "Last_Update" })}</Typography>
                        <Typography>{formateDate({ date: shipment?.CurrentStatus?.timestamp })}</Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography>{f({ id: "Trade_Name" })}</Typography>
                        <Typography>SOUQ</Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography>{f({ id: "Delivery_Date" })}</Typography>
                        <Typography>{formateDate({ date: shipment?.CurrentStatus?.timestamp })}</Typography>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}

export default Home
