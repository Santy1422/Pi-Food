import './App.css';
import React from 'react';
import { Route, Switch } from "react-router";
import {Welcome} from './components/welcome/Welcome.jsx';
import {Home} from "./components/home/Home.jsx"
import {CrearReceta} from "./components/CrearReceta/CrearReceta.jsx"
import { Detail } from './components/Detail.jsx/Detail';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
      <Route  path="/create" component={CrearReceta} />
      <Route  path="/detail/:id" component={Detail} />

    </div>
  );
}

export default App;
