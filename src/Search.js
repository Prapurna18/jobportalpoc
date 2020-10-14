import React from 'react';



function Search(){
    const handleInputChange=(event) => {
    console.log(event.target.value);
    }

    return(
        <div>
            <form>
            <input type="text" placeholder= "search" onChange={handleInputChange}></input>
            </form>

        </div>
    )
    }
  export default Search;