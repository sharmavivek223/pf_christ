// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ErrorPage from './404';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/404" component={ErrorPage} />

        <Redirect to="/404"/>

      </Switch>
      </Router>
  );
}

export default App;
