import React, { createContext, useState } from 'react';
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
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './components/Order/ServiceList/ServiceList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AllServiceList from './components/Admin/AllServiceList/AllServiceList';


export const UserContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  const [allServiceList, setAllServiceList] = useState([])
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn], [allServiceList, setAllServiceList]}>
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
        <PrivateRoute exact path="/order/reviewSubmit">
            <OrderReview></OrderReview>
        </PrivateRoute>
        <PrivateRoute exact path="/order/myServiceList">
            <ServiceList></ServiceList>
          </PrivateRoute>
        <PrivateRoute exact path="/allServiceList">
           <AllServiceList></AllServiceList>
        </PrivateRoute>
        <PrivateRoute exact path="/admin">
           <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/addService">
           <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/makeAdmin">
           <MakeAdmin></MakeAdmin>
        </PrivateRoute>
      </Switch>
     </Router>
      
    </UserContext.Provider>
  );
}

export default App;
