import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useIntl } from "react-intl"
// import axios from "axios"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { makeStyles } from "@mui/styles"
import { Shipment } from "types/shipment"
import { formateDate, getParam } from "helpers"
import Tracking from "component/Tracking"
import ShipmentIssue from "component/ShipmentIssue"
import ShipmentDetails from "component/ShipmentDetails"
import ShipmentAddress from "component/ShipmentAddress"
import ShipmentDeliveryStep from "component/ShipmentDeliveryStep"
import LoadingScreen from "screens/LoadingScreen"
import { getShipmentDetails } from "API"

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
    const [loading, setLoading] = useState<boolean>(true)
    const { formatMessage: f } = useIntl()
    const { trackingNumber } = getParam({ search })

    useEffect(() => {
        ;(async () => {
            try {
                if (trackingNumber) {
                    const { Shipment: ShipmentData } = await getShipmentDetails({ trackingNumber: Number(trackingNumber) })
                    useShipment(ShipmentData)
                }
                setLoading(false)
            } catch (err) {
                setLoading(false)
            }
        })()
    }, [trackingNumber, getParam])

    if (loading) return <LoadingScreen />

    return (
        <Container>
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
                        <Grid item container>
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
                        <Grid item container>
                            <ShipmentDeliveryStep step={1} />
                        </Grid>
                        <Grid item container>
                            <Grid item xs={8}>
                                <Typography>{f({ id: "Shipment_Details" })}</Typography>
                                <ShipmentDetails details={shipment.TransitEvents} />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>{f({ id: "Delivery_Address" })}</Typography>
                                <ShipmentAddress />
                                <ShipmentIssue />
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default Home
