import React, { useState } from 'react'
import { CategoryContext } from './CategoryContext'

const CategoryState=(props)=>{
    const [currentCategory, setCurrentCategory] = useState("Denim Rag Rugs");
return(
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
        {props.children}
    </CategoryContext.Provider>
)
}

export default CategoryState
