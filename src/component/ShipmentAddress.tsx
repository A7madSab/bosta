import { useIntl } from "react-intl"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import makeStyles from "@mui/styles/makeStyles"

const useStyles = makeStyles({
    root: {
        backgroundColor: "#f1f1f1",
        boxShadow: "none",
    },
})

const ShipmentAddress = () => {
    const classes = useStyles()
    const { formatMessage: f } = useIntl()
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography>{f({ id: "Dummy_Address" })}</Typography>
            </CardContent>
        </Card>
    )
}

export default ShipmentAddress
