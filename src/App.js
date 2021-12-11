import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [pin, setPin] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Form setPin={setPin} />
          </Route>
          <Route exact path="/table">
            <Table pin={pin} setPin={setPin} />
          </Route>
        </Switch>
      </Router>
      {/* <Form /> */}
      {/* <Table pin={110001} /> */}
    </div>
  );
}

export default App;
