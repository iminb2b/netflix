import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as ROUTES from "./constants/routes"
import Browse from './pages/Browse'
import SignUp from './pages/SignUp'
import { useHistory } from 'react-router'
import SignIn from './pages/SignIn'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from "./hooks"
import { getAuth, signOut } from '@firebase/auth'
const App = () => {
  const auth = getAuth
  const user = useAuthListener().user;
  const history = useHistory();

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.HOME}>
              <Home />
            </IsUserRedirect>
          </Route>
          <Route exact path={ROUTES.BROWSE}>
            <ProtectedRoute
              user={user}
              path={ROUTES.BROWSE} exact>
              <Browse />
            </ProtectedRoute>
          </Route>
          <Route exact path={ROUTES.SIGN_IN}>
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_IN}>
              <SignIn />
            </IsUserRedirect>
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_UP}>
              <SignUp />
            </IsUserRedirect>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
