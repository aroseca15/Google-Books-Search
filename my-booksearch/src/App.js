import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Save from './pages/Save';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Header from '../conponents/Header';

function App() {


  return (<BrowserRouter>
    <main className="App">
      <Switch>
        <Route exact path="/">{Home}</Route>
        <Route exact path="/save">{Save}</Route>
      </Switch>
    </main>
  </BrowserRouter>);
}

export default App;
