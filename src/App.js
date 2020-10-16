import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import Order from './components/Order/Order/Order';
import OrderReview from './components/Order/OrderReview/OrderReview';
import Admin from './components/Admin/Admin/Admin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './components/Order/ServiceList/ServiceList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AllServiceList from './components/Admin/AllServiceList/AllServiceList';


export const UserContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
     <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/order">
           <Order></Order>
        </PrivateRoute>
        <Route exact path="/order/reviewSubmit">
            <OrderReview></OrderReview>
        </Route>
        <Route exact path="/order/myServiceList">
            <ServiceList></ServiceList>
          </Route>
        <Route exact path="/allServiceList">
           <AllServiceList></AllServiceList>
        </Route>
        <Route exact path="/admin">
           <Admin></Admin>
        </Route>
        <Route exact path="/admin/addService">
           <AddService></AddService>
        </Route>
        <Route exact path="/admin/makeAdmin">
           <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
     </Router>
      
    </UserContext.Provider>
  );
}

export default App;
