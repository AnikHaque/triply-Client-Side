import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './components/navigation/home/Home.js';
import About from '../src/components/about/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import AddService from './components/addservice/AddService';
import ServiceDetail from './components/servicedetail/ServiceDetail';
import Login from './components/login/Login';
import Register from './components/login/Registration';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/login/privateRoute/PrivateRoute';
import ManageOrder from './components/manageorder/ManageOrder';
import MyOrders from './components/myorders/Myorders';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Navigation></Navigation>
     <Switch>
       <Route exact path="/">
<Home></Home>
       </Route>
       <Route exact path="/about">
<About></About>
       </Route>
       <Route exact path="/home">
<Home></Home>
       </Route>
       <Route exact path="/addservice">
<AddService></AddService>
       </Route>
       <Route exact path="/footer">
<Footer></Footer>
       </Route>
       <Route exact path="/manageorder">
<ManageOrder></ManageOrder>
       </Route>
       <Route exact path="/myorder">
<MyOrders></MyOrders>
       </Route>
       <PrivateRoute path="/services/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route exact path="/login">
<Login></Login>
       </Route>
            <Route exact path="/register">
<Register></Register>
       </Route>
     </Switch>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
