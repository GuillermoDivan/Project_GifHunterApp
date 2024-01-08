import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifHunterApp = () => {

    const [categories, setCategories] = useState(['Pokemon', 'Sakura Card Captor']);
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)){return;}
        setCategories([newCategory, ...categories]);
    }

    return(
        <>
            <h1> GifHunterApp </h1>
            <AddCategory onNewCategory={onAddCategory}
            //setCategories={setCategories}
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

/*
Title.
Input form.
Gif list.
-> Gif item.
-> Gif item.
-> Gif item.
...
*/