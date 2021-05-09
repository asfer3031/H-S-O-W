import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import './App.css';
import NavBar from './components/NavBar';
import Cats from "./components/pages/Cats";
import Dogs from "./components/pages/Dogs";


function App() {
  return (
    <>
    <Router>
      <NavBar />

      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/cats" component={Cats} />
          
        </Switch>
      </div>
    </Router>
  </>
  );
}

export default App;
