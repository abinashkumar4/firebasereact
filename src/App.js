import React,{useState,useContext} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import {BrowserRouter as Router , Switch, Route, Link} from "react-router-dom"
//toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//components
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import Signup from "./Pages/Signup"
import Pagenotfound  from "./Pages/Pagenotfound";
import Footer from "./SimpleLayout/Footer";
import Header from "./SimpleLayout/Header";

//user context
import { UserContext  } from "./Context/UserContext";



export default function App() {

  const [user,setUser] = useState(null)
  return (
    <Router>
        <ToastContainer />
      
        <UserContext.Provider value = {{user,setUser
        }}>
          <Header />
         <Switch>
           <Route path = "/" exact component={Home} />
           <Route exact path = "/signin" component={SignIn} />
           <Route exact path = "/signup" component={Signup} />
           <Route exact path = "*" component={Pagenotfound} />
         </Switch>
         <Footer />
        </UserContext.Provider>
      
    </Router>
  )
}
