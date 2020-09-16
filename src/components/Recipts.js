import React from 'react';
import {useEffect, useState } from 'react';
import Recipe from './recipe';


const Layout = () => {
const LAYOUT_ID ='8657d4f0';
const LAYOUT_KEY ='6b51a61c722d1ba2195e324331c9e9ab';

const[recipes, setRecipes]= useState([]);
const [search, setSearch] = useState('');
const [query, setQuery]= useState('chicken');

useEffect (() => {
   getReceipes();
}, [query]);


  const getReceipes = async ()=> {
   const response = await fetch (
 `https://api.edamam.com/search?q=${query}&app_id=${LAYOUT_ID}&app_key=${LAYOUT_KEY}`
 );

   const data = await response.json();
   setRecipes(data.hits);
   console.log(data.hits);

  };
  const updataSearch = e => {
    setSearch(e.target.value);
    console.log (search);
  

  };
  
  const getSearch = e => {
   e.preventDefault();
   setQuery(search); 
   setSearch('');
  }
  return (
      <div className='layout'>
           <form onSubmit= {getSearch} className= 'search-form'>
            <input 
            className='search-bar' 
            type ='text' 
            value={search} 
            onChange={updataSearch} />
            <button className='search-button' type='submit'>
               Search 
           </button>
        </form>
        <div className="recipe">
        {recipes.map(recipe => (
         <Recipe
          
         title={recipe.recipe.label} 
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         ingredients= {recipe.recipe.ingredients}
        />
        ))}
        </div>
      </div>
    );
  }

  export default Layout;