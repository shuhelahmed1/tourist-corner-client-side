import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Logout from './components/Logout/Logout';
import Footer from './components/Footer/Footer';
import Offer from './components/Offer/Offer';
import AddOffer from './components/AddOffer/AddOffer';



function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
