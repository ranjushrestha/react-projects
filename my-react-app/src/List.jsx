import PropTypes from 'prop-types';


    function List(props) {
        const category = props.category;
        const itemList = props.items;
    
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories);
    // fruits.sort((a, b) => b.calories - a.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

            const listItems = itemList.map(item => 
                            <li key={item.id}>
                            {item.name}: &nbsp;
                            <b>{item.calories}</b></li>);

        return (
            <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            </>
        );
                
        }
    
        List.PropTypes = {
            category: PropTypes.string,
            items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
        }

    List.defaultProps = {
        items: [],
        category: "Uncategorized",
    }
    
    export default List
