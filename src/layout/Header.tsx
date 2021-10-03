import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material"
import MobileHeader from "layout/MobileHeader"
import DesktopHeader from "layout/DesktopHeader"

const Header = () => {
    const theme = useTheme()
    const matchMD = useMediaQuery(theme.breakpoints.down("md"))

    return matchMD ? <MobileHeader /> : <DesktopHeader />
}

export default Header
