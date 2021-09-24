
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Destinations from  './Components/Destinations';
import Login from './Components/login';
import Signup from './Components/Signup';
import Showcase from './Components/Showcase';
import  "./css/main.css";
function App() {
  return (
    <div>
    <Router>
       <Header/>

       <Route exact path="/">
       <Showcase/>
       { <Destinations/>}
       </Route>
       
       <Route path ="/login">
       <login/>
       </Route>

       <Route path ="/signup">
       <signup/>
       </Route>
       
    
       <Footer/>
    </Router>
    </div>
  );
}

export default App;
