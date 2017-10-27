import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
  <ol className="groceries">
  	<h2>Grocery List </h2>
  		{props.list.map(groceryItem =>
  		<GroceryItem groceryItem={groceryItem} key= {groceryItem.id} />)}
  </ol>
);

export default GroceryList;