import React from "react";
import { Recetas } from "../recetas/Recetas.jsx";
import {Nav} from "../nav/Nav.jsx"
import { Sidebar } from "../sidebar/Sidebar.jsx";
import styles from "./Home.module.css"
import { Link } from "react-router-dom";
export const Home = (props) => {
  return(
    <div className={styles.container}>
    <div className={styles.sidebarRow}>
      <div className={styles.sidebarColumn}>
        <Sidebar />
      </div>
      <div className={styles.recetasColumn}>
        <Recetas />
      </div>

    </div>
    </div>
);
}
