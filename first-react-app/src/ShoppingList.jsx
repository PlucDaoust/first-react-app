import ShoppingListItem from "./ShoppingListItem";

function shoppingList({items}) {
    return (
        <ul>
            {items.map((i) => 
                <ShoppingListItem key={i.id} {...i}/>
            )}
        </ul>
    )
};

export default shoppingList;