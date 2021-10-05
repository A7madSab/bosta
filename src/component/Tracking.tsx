import { FC, useState } from "react"
import { useIntl } from "react-intl"
import { useHistory } from "react-router-dom"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"

interface TrackingProps {
    menu?: Boolean
    setTrackingMenu?: any
}

const Tracking: FC<TrackingProps> = ({ menu, setTrackingMenu }) => {
    const { formatMessage: f } = useIntl()
    const { push } = useHistory()
    const [shipmentNumber, setShipmentNumber] = useState<string>("")

    const trackShipment = () => {
        push(`/?tracking=${shipmentNumber}`)
        if (setTrackingMenu) setTrackingMenu(undefined)
    }

    return (
        <>
            {!menu && <Typography>{f({ id: "Enter_your_tracking_No" })}</Typography>}
            <Typography color="primary" variant="h6">
                <strong>{f({ id: "Tracking_Shipment" })}</strong>
            </Typography>
            {menu && <Typography>{f({ id: "Enter_your_tracking_No" })}</Typography>}
            <Grid container direction="row" alignItems="center" justifyContent="space-between">
                <Grid item xs={10}>
                    <TextField type="number" value={shipmentNumber} onChange={(e) => setShipmentNumber(e.target.value)} sx={{ padding: "0px" }} id="outlined-basic" placeholder="Outlined" variant="outlined" />
                </Grid>
                <Grid item container justifyContent="flex-end" xs={2}>
                    <IconButton onClick={trackShipment} sx={{ backgroundColor: "#FF0000" }}>
                        <SearchIcon color="secondary" />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}

Tracking.defaultProps = {
    menu: false,
    setTrackingMenu: undefined,
}

export default Tracking
