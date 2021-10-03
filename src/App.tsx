import { IntlProvider } from "react-intl"
import { BrowserRouter, useLocation } from "react-router-dom"
import { FC } from "react"
import { ThemeProvider } from "@mui/material"
import routes, { renderRoutes } from "navigation"
import createTheme from "theme"
import { getLocaliztions } from "intl"

const App: FC = () => {
    const { pathname } = useLocation()
    const locale = pathname.includes("en") ? "en" : "ar"
    const theme = createTheme({ locale })
    console.log("pathname theme", { pathname, theme })

    return (
        <IntlProvider locale={locale} defaultLocale="ar" messages={getLocaliztions({ locale })}>
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
