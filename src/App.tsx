import { ThemeProvider } from "@mui/material"
import routes, { renderRoutes } from "navigation"
import { FC } from "react"
import theme from "theme"

const App: FC = () => {
  return <ThemeProvider theme={theme}>{renderRoutes({ routes })}</ThemeProvider>
}

export default App
