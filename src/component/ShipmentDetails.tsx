import { FC } from "react"
import { useIntl } from "react-intl"
import { Status } from "types/shipment"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { getDate, getTime } from "helpers"

interface ShipmentDetailsProps {
    details: Status[]
}

const ShipmentDetails: FC<ShipmentDetailsProps> = ({ details }) => {
    const { formatMessage: f } = useIntl()

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#E6E6E6" }}>
                        <TableCell align="right">{f({ id: "Branch" })}</TableCell>
                        <TableCell align="right">{f({ id: "Date" })}</TableCell>
                        <TableCell align="right">{f({ id: "Time" })}</TableCell>
                        <TableCell align="right">{f({ id: "Details" })}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {details.map(({ state, timestamp }) => (
                        <TableRow key={timestamp} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="right" component="th" scope="row">
                                {f({ id: "Nasr_City" })}
                            </TableCell>
                            <TableCell align="right">{getDate({ date: timestamp })}</TableCell>
                            <TableCell align="right">{getTime({ date: timestamp })}</TableCell>
                            <TableCell align="right">{f({ id: state })}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ShipmentDetails
