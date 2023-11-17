import React from "react";
import Category from "./Category"
import {categoriesList} from "../data"

const Categories = () => {
    return (
        <div className="categories">
            {categoriesList.map((category, index) => {
                return <Category key={index} data={category} />
            }) }     
        </div>
    )
}

export default Categories
