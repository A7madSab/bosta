import { FC } from "react"
import { useIntl } from "react-intl"

import Step from "@mui/material/Step"
import Stepper from "@mui/material/Stepper"
import StepLabel from "@mui/material/StepLabel"
import { steps } from "appConstants"
import StepperConnector from "component/StepperConnector"
import StepperIcon from "component/StepperIcon"

interface ShipmentDeliveryStepProps {
    step: number
}

const ShipmentDeliveryStep: FC<ShipmentDeliveryStepProps> = ({ step = 1 }) => {
    const { formatMessage: f } = useIntl()

    return (
        <Stepper alternativeLabel activeStep={step} style={{ width: "100%" }} connector={<StepperConnector />}>
            {steps.map(({ label }, key) => (
                <Step expanded key={label}>
                    <StepLabel StepIconComponent={() => <StepperIcon step={step} position={key} />}>
                        <strong>{f({ id: label })}</strong>
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default ShipmentDeliveryStep
