import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifHunterApp = () => {

    const [categories, setCategories] = useState(['House of the Dragon', 'Lord of the Rings']);
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)){return;}
        setCategories([newCategory, ...categories]);
    }

    return(
        <>
            <h1> GifHunterApp </h1>
            <AddCategory onNewCategory={onAddCategory}
            />
            {
            categories.map((category) => ( 
            <GifGrid 
                key={category}
                category={category}
            /> ))
            }
        </>
    )
}
