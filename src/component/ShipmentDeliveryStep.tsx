import { FC } from "react"
import { useIntl } from "react-intl"

import Step from "@mui/material/Step"
import Stepper from "@mui/material/Stepper"
import StepLabel from "@mui/material/StepLabel"
// import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import { steps } from "appConstants"

interface ShipmentDeliveryStepProps {
    step: number
}

const ShipmentDeliveryStep: FC<ShipmentDeliveryStepProps> = ({ step = 1 }) => {
    const { formatMessage: f } = useIntl()

    return (
        <Stepper style={{ direction: "ltr", width: "100%" }} alternativeLabel activeStep={step}>
            {steps.map(({ label }) => (
                <Step key={label}>
                    <StepLabel>{f({ id: label })}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default ShipmentDeliveryStep
