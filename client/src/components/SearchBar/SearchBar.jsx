import React from "react";
import { useState } from "react";
import * as actions from "../../redux/actions"
import { useDispatch } from "react-redux";


export const SearchBar = () => {

const [search, setSearch] = useState("")
const dispatch = useDispatch()

const handleChange =(e) => {
    e.preventDefault()
setSearch(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(actions.BuscarRec(search))
    dispatch(actions.cambiarPag(1))

}
    return(
        <div>
            <input onChange={handleChange}/>
            <button onClick={handleSubmit}>Buscar</button>
        </div>
    )
}