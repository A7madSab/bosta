import { createTheme } from "@mui/material"

const createMUITheme = ({ locale }: { locale: "ar" | "en" }) => {
    const dir = locale === "ar" ? "rtl" : "ltr"
    document.body.dir = dir

    const theme = createTheme({
        direction: dir,
        breakpoints: {
            values: {
                xs: 400,
                sm: 600,
                md: 980,
                lg: 1024,
                xl: 1200,
            },
        },
        palette: {
            primary: {
                main: "#FF0000",
            },
            secondary: {
                main: "#FFFFFF",
            },
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#FFFFFF",
                        padding: "0px",
                        margin: "0px",
                    },
                },
            },
        },
        typography: {
            fontFamily: "Cairo",
        },
    })

    return theme
}

export default createMUITheme
