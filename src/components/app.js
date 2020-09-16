import React from 'react';
import Recipts from './Recipts';
import Home from './home';
import Navbar from './navbar';
import About from './about';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return(
   <Router>
    <div className= 'App'>
      <Navbar />
      <Switch>
       <Route path= '/Recipts' exact component= {Recipts}/>
       <Route path= "/home" exact component= {Home}/>
       <Route path= '/about' exact component= {About}/>

       



</Switch>
     
      </div>
   </Router>
  );
  
}

export default App;


















































// import React from 'react';
// import {useEffect, useState } from 'react';
// import Recipe from './recipe';

// const App = () => {
// const APP_ID ='d54a5303';
// const APP_KEY ='8798e3cfc30ff464d4bee716ad3b5dc8';

// const[recipes, setRecipes]= useState([]);
// const [search, setSearch] = useState('');
// const [query, setQuery]= useState('chicken');

// useEffect (() => {
//   getReceipes();
// }, [query]);


//   const getReceipes = async ()=> {
//    const response = await fetch (
//      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//    );

//    const data = await response.json();
//    setRecipes(data.hits);
//    console.log(data.hits);

//   };
//   const updataSearch = e => {
//     setSearch(e.target.value);
//     console.log (search);
  

//   };
  
//   const getSearch = e => {
//    e.preventDefault();
//    setQuery(search); 
//    setSearch('');
//   }
//   return (
//       <div className='App'>
//            <form onSubmit= {getSearch} className= 'search-form'>
//             <input 
//             className='search-bar' 
//             type ='text' 
//             value={search} 
//             onChange={updataSearch} />
//             <button className='search-button' type='submit'>
//                Search 
//            </button>
//         </form>
//         <div className="recipe">
//         {recipes.map(recipe => (
//          <Recipe
          
//          title={recipe.recipe.label} 
//          calories={recipe.recipe.calories}
//          image={recipe.recipe.image}
//          ingredients= {recipe.recipe.ingredients}
//         />
//         ))}
//         </div>
//       </div>
//     );
//   }

//   export default App;

















































