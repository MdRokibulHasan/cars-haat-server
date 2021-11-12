import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Login/Resgistration/Registration";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact/Contact";
import Products from "./Pages/Products/Products/Products";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Route>
          <Navbar></Navbar>
        </Route>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/products">
            <Products></Products>
          </PrivateRoute>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>

          </Route>
        </Switch>

        <Route>
          <Footer></Footer>
        </Route>
      </Router>
    </AuthProvider>
  );
}

export default App;
