import { Suspense, Fragment, lazy, FC } from "react"
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"

import LoadingScreen from "screens/LoadingScreen"
import Layout from "layout"

interface Routes {
  exact: boolean
  layout: FC
  path: string
  component: any
}

const routes = [
  {
    exact: true,
    layout: Layout,
    path: "/",
    component: lazy(() => import("views/Home"))
  },
  {
    exact: true,
    layout: Layout,
    path: "/404",
    component: lazy(() => import("views/NotFound"))
  }
]

export const renderRoutes = ({ routes }: { routes: Routes[] }) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          {routes.map((route, key) => {
            const Component = route.component
            const Layout = route.layout || Fragment

            return (
              <Route
                key={key}
                path={route.path}
                exact={route.exact}
                render={props => (
                  <Layout>
                    <Component {...props} />
                  </Layout>
                )}
              />
            )
          })}
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default routes
