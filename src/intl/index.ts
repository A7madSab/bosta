import ar from "intl/ar.json"
import en from "intl/en.json"

export const getLocaliztions = ({ locale }: { locale: "ar" | "en" }) => {
    if (locale === "ar") return ar
    return en
}
