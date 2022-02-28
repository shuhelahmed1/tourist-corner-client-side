import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
