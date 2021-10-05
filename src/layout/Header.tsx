import { useState } from "react"

import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material"
import MobileHeader from "layout/MobileHeader"
import DesktopHeader from "layout/DesktopHeader"
import Tracking from "component/Tracking"
import Menu from "@mui/material/Menu"

const Header = () => {
    const theme = useTheme()
    const matchMD = useMediaQuery(theme.breakpoints.down("md"))
    const [trackingmenu, setTrackingMenu] = useState(null)

    return (
        <>
            {matchMD ? <MobileHeader setTrackingMenu={setTrackingMenu} /> : <DesktopHeader setTrackingMenu={setTrackingMenu} />}

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
                <Tracking menu setTrackingMenu={setTrackingMenu} />
            </Menu>
        </>
    )
}

export default Header
