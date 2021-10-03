import { useState } from "react"

import Grid from "@mui/material/Grid"
import Menu from "@mui/material/Menu"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import MenuItem from "@mui/material/MenuItem"
import MenuIcon from "@mui/icons-material/Menu"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import { headerLinks } from "appConstants"
import SearchIcon from "@mui/icons-material/Search"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography } from "@mui/material"

const MobileHeader = () => {
    const [menu, setMenu] = useState(null)
    const [trackingmenu, setTrackingMenu] = useState(null)

    const handleClose = () => setMenu(null)
    const handleClick = (event: any) => setMenu(event.currentTarget)
    const handleTrackingShipmentClick = (event: any) => {
        handleClose()
        setTrackingMenu(event.currentTarget)
    }

    return (
        <>
            <AppBar color="secondary">
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <img src="/assets/logo/en-logo-with-text.svg" alt="bosta logo" />
                        </Grid>

                        <Grid item>
                            <IconButton onClick={handleClick}>
                                <MenuIcon color="primary" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Menu
                id="shipment-menu"
                anchorEl={trackingmenu}
                open={Boolean(trackingmenu)}
                PaperProps={{ style: { padding: "25px 20px", width: "250px", background: "#fafafa" } }}
                onClose={() => setTrackingMenu(null)}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <Typography variant="h6">
                    <strong>Track your shipment</strong>
                </Typography>
                <Typography>Enter your tracking No.</Typography>
                <Grid container direction="row" alignItems="center" justifyContent="space-between">
                    <Grid item xs={10}>
                        <TextField sx={{ padding: "0px" }} id="outlined-basic" placeholder="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item container justifyContent="flex-end" xs={2}>
                        <IconButton sx={{ backgroundColor: "#FF0000" }}>
                            <SearchIcon color="secondary" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Menu>

            <Menu
                id="basic-menu"
                anchorEl={menu}
                open={Boolean(menu)}
                PaperProps={{ style: { width: "100%", top: "65px", borderTop: "3px solid red" } }}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {headerLinks.map(({ title }) => (
                    <MenuItem onClick={handleClose}>{title}</MenuItem>
                ))}

                <MenuItem sx={{ display: "flex", justifyContent: "space-between" }} onClick={handleTrackingShipmentClick}>
                    Tracking Shipment <ExpandMoreIcon color="primary" />
                </MenuItem>

                <MenuItem onClick={handleClose}>Sign In</MenuItem>
            </Menu>
        </>
    )
}

export default MobileHeader
