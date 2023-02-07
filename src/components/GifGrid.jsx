import React, {useState, useEffect } from 'react'

import { GifItem } from './GifItem';
//import { getGifs } from '../helpers/getGifs';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

const {images, isLoading} = useFetchGifs(category);

    
    return (
    <>
      <h3>{category}</h3>  
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          /*images.map(image =>(
            <li key={image.id}>{image.title}</li>
            es lo mismo, pero desestructurando images
          images.map(({id,title})=>(
              <li key={id}>{title}</li>*/
              images.map( (image) => (
              <GifItem 
                key={image.id}
                {... image}
                //title={image.title}
                //url={image.url}
                />  
          ))
        }
         
      </div>

    </>
  )
}
