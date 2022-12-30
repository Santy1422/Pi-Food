import React from "react";
import { Recetas } from "../recetas/Recetas.jsx";
import { Sidebar } from "../sidebar/Sidebar.jsx";
import styles from "./Home.module.css"
import { useState } from "react";
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
