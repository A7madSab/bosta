import moment from "moment"

export const formateDate = ({ date }: { date: string }): string => {
    const d = moment(date)
    d.locale("ar")
    return d.format("LLL")
}
