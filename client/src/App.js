import './App.css';
import React from 'react';
import { Route, Switch } from "react-router";
import {Welcome} from './components/welcome/Welcome.jsx';
import {Home} from "./components/home/Home.jsx"
import {CrearReceta} from "./components/CrearReceta/CrearReceta.jsx"
import { Detail } from './components/Detail.jsx/Detail';
import { Nav } from './components/nav/Nav';
import { useLocation } from 'react-router';
import { Error } from './components/Cargando/Error';
import { Modificar } from './components/CrearReceta/Modificar';
import axios from "axios"
axios.defaults.baseURL = "https://pi-food-production-3adc.up.railway.app/"

function App() {
  const location = useLocation()
  return (
    <div className="App">

{location.pathname === '/home' || location.pathname === '/create' || location.pathname === '/detail/:id' ? <Nav /> : null }
      <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
      <Route  path="/create" component={CrearReceta} />
      <Route  path="/detail/:id" component={Detail} />
      <Route  path="/modificar/:id" component={Modificar} />
      <Route  path="*" component={Error} />

      </Switch>
    </div>
  );
}

export default App;
