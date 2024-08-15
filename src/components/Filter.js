// import React from "react";

// function Filter({ search, onSearchChange, onCategoryChange }) {
//   return (
//     <div className="Filter">
//       <input 
//         type="text" 
//         name="search" 
//         placeholder="Search..." 
//         value={search} 
//         onChange={onSearchChange} 
//       />
//       {/* <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select> */}
//     </div>
//   );
// }

// export default Filter;
import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default Filter;
