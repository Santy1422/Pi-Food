import './App.css';
import React from 'react';
import { Route, Switch } from "react-router";
import {Welcome} from './components/welcome/Welcome.jsx';
import {Home} from "./components/home/Home.jsx"
import {CrearReceta} from "./components/CrearReceta/CrearReceta.jsx"
import { Detail } from './components/Detail.jsx/Detail';
import { Nav } from './components/nav/Nav';
import { useLocation } from 'react-router';

function App() {
  const location = useLocation()
  return (
    <div className="App">
{location.pathname === '/' ? null : <Nav />}
      <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
      <Route  path="/create" component={CrearReceta} />
      <Route  path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
