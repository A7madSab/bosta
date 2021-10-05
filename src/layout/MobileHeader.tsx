import { useState, FC } from "react"

import { headerLinks } from "appConstants"
import Grid from "@mui/material/Grid"
import Menu from "@mui/material/Menu"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import MenuItem from "@mui/material/MenuItem"
import MenuIcon from "@mui/icons-material/Menu"
import IconButton from "@mui/material/IconButton"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

interface MobileHeaderProps {
    setTrackingMenu: any
}

const MobileHeader: FC<MobileHeaderProps> = ({ setTrackingMenu }) => {
    const [menu, setMenu] = useState(null)

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
