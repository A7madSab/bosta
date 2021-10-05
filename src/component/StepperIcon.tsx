import { FC } from "react"

import Box from "@mui/material/Box"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import AllInboxIcon from "@mui/icons-material/AllInbox"

interface StepperIconProps {
    step: number
    position: number
}

const StepperIcon: FC<StepperIconProps> = ({ step, position }) => {
    let Icon
    if (step > position) {
        Icon = () => <CheckCircleIcon fontSize="small" color="primary" />
    } else if (step === position) {
        Icon = () => <LocalShippingIcon fontSize="small" style={{ color: "white", backgroundColor: "#FF0000", borderRadius: "50%", padding: "6px", transform: "scaleX(-1)" }} />
    } else {
        Icon = () => <AllInboxIcon fontSize="small" style={{ color: "#EfEfEf", backgroundColor: "#FFFFFF", border: "1px solid #EfEfEf", borderRadius: "50%", padding: "6px" }} />
    }

    return (
        <Box height={24} width={24} style={{ zIndex: 16 }} display="flex" justifyContent="center" alignItems="center">
            {Icon()}
        </Box>
    )
}

export default StepperIcon
