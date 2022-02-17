import './App.css';
import "bulma/css/bulma.min.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Agile_PM from './Pages/Agile_PM';
import Agile_QA from './Pages/Agile_QA';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/pm' component={Agile_PM}/>
        <Route exact path='/qa' component={Agile_QA}/>
      </Switch>
    </Router>
    
  );
}

export default App;
