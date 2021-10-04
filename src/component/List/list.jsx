import ListItem from "../listItem/listItem";
import './list.css'

function List({ items, removeItem}) {

  return (
    <ul>
      {items.map((item) => {
        item.id=Math.round(Math.random()*2358453)
        return <ListItem key={item.id} item={item} removeItem={removeItem}/>;
      })}
    </ul>
  );
}

export default List;
