import React from "react";
import * as actions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import "./pagination.modules.css"

export const Pagination = (props) => {
 const {charactersPerPage, recetas } = props
 const dispatch = useDispatch()

 const currentPage = useSelector(state => state.currentPage)  
    let pages = [];
    for (let i = 1; i <= Math.ceil(recetas / charactersPerPage); i++) {
        pages.push(i);
 }



    return (
        <div className='pagination'>

    
            { pages.map((page, index) => {
                return (
                
                       <button
                        key={index}
                        onClick={() => dispatch(actions.cambiarPag(page))}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button> 
                
                );
            })}
        </div>
    );
};
