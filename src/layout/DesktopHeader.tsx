import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { headerLinks } from "appConstants"
import { useIntl } from "react-intl"

const DesktopHeader = () => {
    const { formatMessage: f } = useIntl()

    return (
        <AppBar color="secondary">
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={3}>
                        <img src="/assets/logo/en-logo-with-text.svg" alt="bosta logo" />
                    </Grid>
                    <Grid item xs={4} container>
                        {headerLinks.map(({ title }) => (
                            <Typography sx={{ padding: "0px 8px" }}>
                                <strong>{f({ id: title })}</strong>
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={5} container>
                        <Typography sx={{ padding: "0px 8px", display: "flex", alignItems: "center" }}>
                            <strong> {f({ id: "Tracking_Shipment" })}</strong> <ExpandMoreIcon color="primary" />
                        </Typography>
                        <Typography sx={{ padding: "0px 8px" }}>
                            <strong>{f({ id: "Sign_In" })}</strong>
                        </Typography>
                        <Typography color="primary" sx={{ padding: "0px 8px" }}>
                            <strong>عربي</strong>
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default DesktopHeader
