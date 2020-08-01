import React from 'react';


cosnt Search = (props) => {
    return(
       <div className="search">
           <form action="">
               <input onChange={props.handleSearch} type="text"/>
               <button type="submit">Search</button>
           </form>
       </div>
    )t 
}
export default Search;