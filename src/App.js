import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Offer from './components/Offer/Offer';
import AddOffer from './components/AddOffer/AddOffer';
import AuthProvider from './context/AuthProvider';
import ManageOrders from './components/ManageOrders/ManageOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Details from './components/Details/Details';



function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/addoffer">
         <AddOffer></AddOffer>
       </Route>
       <PrivateRoute path="/offers/details/:id">
         <Details></Details>
       </PrivateRoute>
       <Route path="/offer">
         <Offer></Offer>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="**">
         <NotFound></NotFound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
