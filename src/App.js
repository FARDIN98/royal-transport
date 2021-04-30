import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Destination from './Component/Destination/Destination';
import { createContext, useState } from 'react';
import Header from './Component/Header/Header';
export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/login">
                <LogIn></LogIn>
            </Route>
            {/* <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute> */}
            <PrivateRoute path="/destination/:name">
                <Destination></Destination>
            </PrivateRoute>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
