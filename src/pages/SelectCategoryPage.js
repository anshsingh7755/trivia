import React, { useContext } from "react";
import CategorySelector from "../components/CategorySelector";

import "./SelectCategoryPage.css";
import { ConfigContext } from "../context/ConfigContext";

export default function SelectCategoryPage({ nextStep }) {
  const { categories, config, setConfig } = useContext(ConfigContext);

  let categoriesList;
  if (categories) {
    categoriesList = categories.map((category) => {
      return (
        <CategorySelector
          clickFunction={nextStep}
          key={category.id}
          category={category}
        />
      );
    });
  }
  return (
    <div className="categoriesPageWrapper">
      <div className="categoriesPage">
        <h1 className="title">Select A category for quiz</h1>
        <div className="skipCategory">
          <button
            className="buttonSecondary"
            onClick={() => {
              setConfig(prev=>{
                return{...prev, categoryName: "Any Category"}
              })
              nextStep();
            }}
          >
            Any Category
          </button>
        </div>
        <div className="categories">
          {categories ? categoriesList : <h2>Loading...</h2>}
        </div>
      </div>
    </div>
  );
}
