// import { queryAllByAltText } from "@testing-library/react";
// import React, { useState } from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm({ onItemFormSubmit }) {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("Produce");
  
//   function handleSubmit(e) {
//     e.preventDefault();
//     onItemFormSubmit({
//       id: uuid(),
//       name: name,
//       category: category,
//     });
//     setName("");
//     setCategory("Produce");
//   }

//   return (
//     <form className="NewItem" onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>

//       <label>
//         Category:
//         <select
//           name="category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;
import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Dessert");

  const handleSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit({
      id: Date.now().toString(),
      name,
      category,
    });
    setName("");
    setCategory("Dessert");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Dessert">Dessert</option>
          <option value="Main">Main</option>
          <option value="Snack">Snack</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
