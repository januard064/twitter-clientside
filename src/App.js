import React, {useState, useEffect} from 'react';
import Main from './Component/Main';
import Register from './Component/Register';
import Login from './Component/Login';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }

  async function isAuth(){
    try {
      const response = await fetch('/auth/is-verify', {
        method:"GET",
        headers: {token: localStorage.token}
      })

      const responseJson = await response.json()

      // console.log(responseJson)
      responseJson === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
    } catch (err) {
      console.log(err.message)
    }
  }

  const logout = e => {
    e.preventDefault()
    localStorage.removeItem("token")
    setAuth(false)
}

  useEffect(() => {
    // authentication user when token or page refresh
    isAuth()
  })

  return (
     <Router>
      <Switch>
        <Route exact path="/login" render={props => !isAuthenticated? <Login {...props} setAuth={setAuth} /> : <Redirect to="/home" /> } />
        <Route exact path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login" />}/>
        <Route exact path="/home" render={props => isAuthenticated ? <Main {...props} setAuth={setAuth} logout={logout} /> : <Redirect to="/login" />}/>
        <Redirect to="/login" />
      </Switch>
    </Router>

  );
}

export default App;
