import React from "react";
import { useState } from 'react';
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp  = () =>{
    const apiKey ='4Hs6ZKIL7lSO3zksun2vUgTIXqsP3Ubd';
    const [categories, setcategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) =>{
       
        if (categories.includes (newCategory)){
            return;
        }
        console.log(newCategory);
        //const newCategory = 'trigun';
        setcategories([newCategory, ...categories]);        
    }
    
    return(
        <>
            <h1>GifExpertApp</h1>
           <AddCategory 
                onNewCategory={(valor) => onAddCategory(valor)}
            />
       
            {categories.map(( category) => (
                
                    <GifGrid 
                        key={category}
                        category={category}
                     />
            ))
            } 
        </>
        
    )

}
