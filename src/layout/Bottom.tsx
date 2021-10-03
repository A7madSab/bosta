import { useIntl } from "react-intl"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    root: {
        padding: "16px 0px",
        backgroundColor: "#000000",
    },
})

const Bottom = () => {
    const classes = useStyles()
    const { formatMessage: f } = useIntl()

    return (
        <Box className={classes.root}>
            <Container>
                <Typography align="center" color="white">
                    {f({ id: "Bottom_Text" })}
                </Typography>
            </Container>
        </Box>
    )
}

export default Bottom
