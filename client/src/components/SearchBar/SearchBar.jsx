// import React from "react";
// // import { useState } from "react";
// import * as actions from "../../redux/actions"
// import { useDispatch } from "react-redux";
// // import { useSelector } from "react-redux";
// import style from "./SearchBar.module.css"
// import { useSelector } from "react-redux";

// export const SearchBar = () => {
// const dispatch = useDispatch()


// const recetas2 = useSelector(state => state.filteredProducts)


// const filterByInput = (e) =>{
//     let input = e.target.value;
//     dispatch(actions.filterByValue({value: input}))
//  }

//     return(


//      <div className='control' style={{minWidth: "300px"}}>
//         <input className={style.Search} onChange={e=> {
//           //call this method on every change in input
//             filterByInput(e);
//         }} style={{width: "30%"}} placeholder='Buscar receta' type='text'/> 
// {recetas2?.map((ele) => <select> <option>{ele.name}</option> </select>)}
//      </div>
//     )
// }