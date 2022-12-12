import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../redux/actions";
import { Link } from "react-router-dom";

export const Detail = (props) =>{
  console.log(props)
     const { id } = useParams();

const dispatch = useDispatch()
const recetaId = useSelector(state => state.recetaid)


useEffect(() => {
  dispatch(actions.RecetaID(id));
console.log("hola")
  }, []);
  

return (
    <div>
<Link to='/home'>
<button onClick={() => dispatch(actions.VaciarId())}>Regresar al home</button>                </Link>
      <h1>{recetaId?.name}</h1>
      <img src={recetaId?.image} alt={recetaId.name}/>
    <h3>{recetaId?.healthScore}</h3>
    {/* {recetaId?.diets?.map((ele, index) => <h3 key= {index}>{ele}</h3> )} */}
   <p>{recetaId?.steps}</p>
    <p><p dangerouslySetInnerHTML={ { __html: recetaId?.summary }}/></p> 
  </div>
)
}