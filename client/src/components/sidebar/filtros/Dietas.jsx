import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const Dietas = () => {
  const dietas = useSelector((state) => state.dietas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.TraerDietas());
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(actions.filterByDiets(e.target.value));
  };

  return (
    <div className="pagination">
        {dietas?.map((temp, index) => (
          <button onClick={(e) => handleChange(e)} value={temp.name}key={index}>{temp.name} </button>
        ))}
      ;
    </div>
    
  );
};
