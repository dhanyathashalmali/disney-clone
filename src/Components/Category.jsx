import React from "react";

const Category = ({data}) => {
    return (
        <div className="category">
            <h3 className="categoryTitle">{data.title}</h3>
            <div className="categoryImg">
                {data.url.map((img, index) => {
                return <img src={img} key={index} />
            })}
            </div>
        </div>
    )
}

export default Category
