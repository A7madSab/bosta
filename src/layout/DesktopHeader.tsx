import { FC } from "react"
import { useIntl } from "react-intl"
import { headerLinks } from "appConstants"

import Grid from "@mui/material/Grid"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

interface DesktopHeaderProps {
    setTrackingMenu: any
}

const DesktopHeader: FC<DesktopHeaderProps> = ({ setTrackingMenu }) => {
    const { formatMessage: f } = useIntl()

    const handleTrackingShipmentClick = (event: any) => setTrackingMenu(event.currentTarget)

    return (
        <AppBar style={{ boxShadow: "none", borderBottom: "1px solid #EFEFEF" }} color="secondary">
            <Toolbar>
                <Container>
                    <Grid container justifyContent="space-betwee" alignItems="center">
                        <Grid item xs={3}>
                            <img src="/assets/logo/en-logo-with-text.svg" alt="bosta logo" />
                        </Grid>
                        <Grid item xs={4} container>
                            {headerLinks.map(({ title }) => (
                                <Typography key={title} sx={{ padding: "0px 8px" }}>
                                    <strong>{f({ id: title })}</strong>
                                </Typography>
                            ))}
                        </Grid>
                        <Grid item xs={5} container alignItems="center" justifyContent="flex-end">
                            <Typography sx={{ padding: "0px 8px", display: "flex", alignItems: "center" }}>
                                <strong> {f({ id: "Tracking_Shipment" })}</strong>{" "}
                                <IconButton>
                                    <ExpandMoreIcon onClick={handleTrackingShipmentClick} color="primary" />
                                </IconButton>
                            </Typography>
                            <Typography sx={{ padding: "0px 8px" }}>
                                <strong>{f({ id: "Sign_In" })}</strong>
                            </Typography>
                            <IconButton>
                                <Typography color="primary" sx={{ padding: "0px 8px" }}>
                                    <strong>عربي</strong>
                                </Typography>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default DesktopHeader
