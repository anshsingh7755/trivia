import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./CategorySelector.css"
import {ConfigContext} from "../context/ConfigContext";

export default function CategorySelector({category, clickFunction}) {
  const {config, setConfig} = useContext(ConfigContext)
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate(`/quiz?category=${category.id}`);
    setConfig(prev=>{
      return{...prev, category: category.id, categoryName: category.name}
    })
    clickFunction()
  };
  return (
    <button className="categoryButton buttonPrimary" onClick={handleClick}>
      {category.name}
    </button>
  );
}
