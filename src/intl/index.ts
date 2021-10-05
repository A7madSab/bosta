import ar from "intl/ar.json"
import en from "intl/en.json"

export const getLocaliztions = ({ lang }: { lang: "ar" | "en" }) => {
    if (lang === "ar") return ar
    return en
}
