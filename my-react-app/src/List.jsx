
function List() {

    const fruits = [{id: 1, name: "apple", calories: 100},
                    {id: 2, name: "orange", calories: 89},
                    {id: 3, name:"papaya", calories: 88},
                    {id: 4, name: "coconut", calories: 159}
];

// fruits.sort((a, b) => a.name.localeCompare(b.name)); ALPHABETICAL
// fruits.sort((a, b) => b.name.localeCompare(a.name)); REVERSE ALPHABETICAL
// fruits.sort((a, b) => a.calories - b.calories);
// fruits.sort((a, b) => b.calories - a.calories);

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = fruits.map(fruit => 
                    <li key={fruit.id}>
                    {fruit.name}: &nbsp;
                    <b>{fruit.calories}</b></li>);

return<ol>{listItems}</ol>;
}
   
export default List
