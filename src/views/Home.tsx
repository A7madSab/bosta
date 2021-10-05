import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useIntl } from "react-intl"

import Box from "@mui/material/Box"
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
import { StatusToStepsMapper } from "appConstants"

const useStyles = makeStyles({
    card: {
        padding: "16px",
        maxWidth: "300px",
        width: "100%",
        margin: "50px 0px",
        borderRadius: "10px",
    },
    titleContianer: {
        border: "1px solid #efefef",
        borderRadius: "13px 13px 0px 0px",
        padding: "24px",
    },
    ShipmentDeliveryStepContainer: {
        border: "1px solid #efefef",
        borderRadius: "0px 0px 13px 13px",
        padding: "24px",
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
            <Grid container justifyContent="center">
                {!shipment && (
                    <Card className={classes.card}>
                        <Tracking />
                    </Card>
                )}

                {shipment && (
                    <Grid container>
                        <Grid xs={12} item container justifyContent="center" alignItems="center" className={classes.titleContianer}>
                            <Grid item xs={3}>
                                <Typography color="gray" variant="subtitle1">
                                    {f({ id: "Shipment_No" })}: {shipment?.TrackingNumber}
                                </Typography>
                                <Typography>
                                    <strong>{f({ id: shipment?.CurrentStatus?.state })}</strong>
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography color="gray" variant="subtitle1">
                                    {f({ id: "Last_Update" })}
                                </Typography>
                                <Typography>
                                    <strong>{formateDate({ date: shipment?.CurrentStatus?.timestamp })}</strong>
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography color="gray" variant="subtitle1">
                                    {f({ id: "Trade_Name" })}
                                </Typography>
                                <Typography>
                                    <strong>SOUQ.com</strong>
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography color="gray" variant="subtitle1">
                                    {f({ id: "Delivery_Date" })}
                                </Typography>
                                <Typography>
                                    <strong>{formateDate({ date: shipment?.CurrentStatus?.timestamp })}</strong>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid xs={12} item container className={classes.ShipmentDeliveryStepContainer}>
                            <ShipmentDeliveryStep
                                // @ts-ignore
                                step={StatusToStepsMapper[shipment?.CurrentStatus?.state]}
                            />
                        </Grid>
                        <Grid xs={12} item container spacing={2} style={{ paddingTop: "16px" }}>
                            <Grid item md={8} xs={12}>
                                <Typography style={{ padding: "8px 0px" }}>
                                    <strong>{f({ id: "Shipment_Details" })}</strong>
                                </Typography>
                                <ShipmentDetails details={shipment.TransitEvents} />
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Typography style={{ padding: "8px 0px" }}>
                                    <strong>{f({ id: "Delivery_Address" })}</strong>
                                </Typography>
                                <Box mb={2}>
                                    <ShipmentAddress />
                                </Box>
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
