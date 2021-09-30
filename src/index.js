import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductionLogInDashBoard from './Component/LogInDashBoard/ProductionLogInDashBoard';
import HomePage from './Component/Pages/HomePage';
import SignIn from './Component/SignIn';
import MainLogInDashboard from './Component/LogInDashBoard/MainLogInDashboard';
import Welcome from './Component/LogInDashBoard/SuccessfulDataInsert';
import Checkout from './Component/Checkout/Checkout';
import SuccessfulDataInsert from './Component/LogInDashBoard/SuccessfulDataInsert';
import RecordDashboard from './Component/LogInDashBoard/RecordDashboard';
import Shop from './Component/Pages/Shop';
import AboutMain from './Component/Pages/AboutMain';
import MessageSent from './Component/MessageSent';
import theme from './Component/Theme';
import { ThemeProvider } from '@material-ui/core';


const Routing =()=>{
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/successfulDataInsert" component={SuccessfulDataInsert}/>
        <Route path="/production" component={ProductionLogInDashBoard}/>
        <Route path="/shop-login" component={MainLogInDashboard}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/recordDashboard" component={RecordDashboard}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/aboutMain" component={AboutMain}/>
        <Route path ="/messageSent" component={MessageSent}/>
      </Switch>
    </Router>


  )
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
   <Routing/>
   </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
