import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector"
import { styled } from "@mui/material/styles"

const StepperConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        right: "calc(-53%)",
        top: "12px",
        position: "relative",
        width: "100%",
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "red",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "red",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderTopWidth: 3,
        borderRadius: 1,
    },
}))

export default StepperConnector
