import moment from "moment"

export const formateDate = ({ date }: { date: string }): string => {
    const d = moment(date)
    d.locale("ar")
    return d.format("LLL")
}

export const getDate = ({ date }: { date: string }): string => {
    return moment(date).format("L")
}

export const getTime = ({ date }: { date: string }): string => {
    return moment(date).format("LT")
}

export const getParam = ({ search }: { search: string }): { trackingNumber: string; lang: "en" | "ar" } => {
    const trackingNumber = search?.split("&")[0]?.split("=")[1]
    const lang = search.includes("=en") ? "en" : "ar"

    return { trackingNumber, lang }
}
