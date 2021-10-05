import { useIntl } from "react-intl"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import makeStyles from "@mui/styles/makeStyles"
import BugReportIcon from "@mui/icons-material/BugReport"

const useStyles = makeStyles({
    root: {
        backgroundColor: "#f1f1f1",
        boxShadow: "none",
    },
})

const ShipmentIssue = () => {
    const classes = useStyles()
    const { formatMessage: f } = useIntl()
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid container item xs={4} justifyContent="center" alignItems="center">
                        <BugReportIcon />
                    </Grid>
                    <Grid container item xs={8}>
                        <Typography>
                            <strong>{f({ id: "Facing_Issue" })}</strong>
                        </Typography>
                        <Button fullWidth variant="contained">
                            {f({ id: "Report_Issue" })}
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ShipmentIssue
