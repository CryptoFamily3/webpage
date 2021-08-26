import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/base/navbar';
import ConnectBtn from './components/base/buttons/connect-btn';

import Sidebar from './components/base/sidebar';
import Home from './components/routes/home';


import { store as notificationStore } from 'react-notifications-component';
// import ReactNotification from 'react-notifications-component'
//
import {initWeb3} from './web3/web3';

import './mystyles2.scss';
// import 'react-notifications-component/dist/theme.css'

initWeb3();
// const notification = {
//   title: "Wonderful!",
//   message: "teodosii@react-notifications-component",
//   type: "success",
//   insert: "top",
//   container: "top-right",
//   animationIn: ["animate__animated", "animate__fadeIn"],
//   animationOut: ["animate__animated", "animate__fadeOut"],
//   dismiss: {
//     duration: 5000,
//     onScreen: false
//   }
// }




const App = props => {
    return (
        <Router>

        {/*}    <ReactNotification /> */}
            <Navbar/>
            <Switch>
                <Redirect from="/" to="/home" exact/>
                <Route exact path="/bridge">
                    <Sidebar/>
                    <Home/>
                </Route>
            </Switch>

        </Router>

    );
}

export default App;
