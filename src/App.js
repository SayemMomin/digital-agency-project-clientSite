import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import Order from './components/Order/Order/Order';
import OrderReview from './components/Order/OrderReview/OrderReview';
import Admin from './components/Admin/Admin/Admin';
import ServiceList from './components/Order/ServiceList/ServiceList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://ancient-stream-18565.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServices(data))
},[])
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
       <ServiceContext.Provider value={[services, setServices]}>
     <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute exact path="/dashboard/order">
           <Order/>
           </PrivateRoute>
        <PrivateRoute exact path="/dashboard/reviewSubmit">
          <OrderReview/>
          </PrivateRoute>
        
        <PrivateRoute exact path="/dashboard/order/:id">
            <Order/>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/myServiceList">
            <ServiceList/>
          </PrivateRoute>
        <PrivateRoute exact path="/dashboard/admin">
           <Admin/>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/addService">
           <AddService/>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/makeAdmin">
           <MakeAdmin/>
        </PrivateRoute>
      </Switch>
     </Router>
     </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
