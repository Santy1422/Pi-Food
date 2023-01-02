import React from "react";
import { Dietas } from "./filtros/Dietas";
import { DesAsc } from "./filtros/DesAsc";
import { Health } from "./filtros/Health";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions"
import style from "./siderbar.module.css"
import { NormalSearch } from "../SearchBar/NormalSearch";
import { useEffect } from "react";



export const Sidebar = (props) =>{
// const [seleccionadas, setSeleccionadas] = useState([])
// const [search, setSearch] = useState("")
const dispatch = useDispatch()    

const recetas2 = useSelector(state => state.recetas2)

const seleccionadas = useSelector(state => state.seleccionadas)
const search = useSelector(state => state.search)


//filtro de dietas
const handleChange2 = (e) => {

    const name = e.target.value
    const buscar = seleccionadas.find(ele => ele === name)
    if(buscar){
      dispatch(actions.setSeleccionadas(seleccionadas.filter(dietas => dietas !== name)))
      props.setCheckboxState(seleccionadas.filter(dietas => dietas !== name))
    }else{
      dispatch(actions.setSeleccionadas([...seleccionadas, e.target.value]))
  }
  };
  
 const filtroDietas = (seleccionadas, dietas) =>{
    for(const id of seleccionadas){
      const result = dietas?.find((ele) => ele == id)
      if(!result) return false
        }
    return true
   } 
   const filtro = recetas2?.filter((ele) => filtroDietas(seleccionadas, ele.diets) && ele.name.toLowerCase().includes(search) ) 
  
//barrra de busqueda
const handleChange =(e) => { 
    e.preventDefault() 
    dispatch(actions.setSearch(e.target.value))
}

useEffect(() => {

    dispatch(actions.filterByDiets(filtro));
  
  }, [search, seleccionadas])


  const handleClick = () => {
    window.location.reload();
}


    return (
        <div>
        <div className={style.side}>
        <div className={style.filterConteiner}>
            <NormalSearch handleChange={handleChange} />
            <hr></hr>
            <DesAsc/>
            <hr></hr>

            <Health/>
            <Dietas handleChange2={handleChange2}  />
            <button className={style.button} onClick={(event) => handleClick(event)}><p>Limpiar filtros</p></button>
   

        </div>
        </div>

        </div>

    )
}