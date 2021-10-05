import { IntlProvider } from "react-intl"
import { BrowserRouter, useLocation } from "react-router-dom"
import { FC, useEffect, useState } from "react"
import { ThemeProvider } from "@mui/material"
import routes, { renderRoutes } from "navigation"
import createTheme from "theme"
import { getLocaliztions } from "intl"
import { getParam } from "helpers"

const App: FC = () => {
    const { search } = useLocation()
    const { lang: initalLang } = getParam({ search })
    const [lang, setLang] = useState(initalLang)
    const theme = createTheme({ lang })

    useEffect(() => {
        const { lang: currentLang } = getParam({ search })
        setLang(currentLang)
    }, [search])

    return (
        <IntlProvider locale={lang} defaultLocale="ar" messages={getLocaliztions({ lang })}>
            <ThemeProvider theme={theme}>{renderRoutes({ routes })}</ThemeProvider>
        </IntlProvider>
    )
}

const AppWraper: FC = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

export default AppWraper
