import ListItem from "../listItem/listItem";
import './list.css'

function List({ items }) {
  // const [over, setOver] = useState(false);

  // const mouseOver = () => {
  //   setOver(!over);
  // };

  return (
    <ul>
      {items.map((item, i) => {
        return <ListItem key={i} item={item} />;
        // return (
        //   <>
        //     <li
        //       key={i}
        //       onMouseOver={mouseOver}
        //       onMouseOut={mouseOver}
        //       style={{
        //         borderRight: `5px solid ${item.amount < 0 ? "red" : "green"}`,
        //       }}
        //       className="item-name"
        //     >
        //       <p>{item.itemName}</p>
        //       <p>{item.amount}</p>
        //       <div className="circle"  style={{ display: over ? "flex" : "none" }}>
        //         <p className="cross">x</p>
        //       </div>
        //     </li>
        //   </>
        // );
      })}
    </ul>
  );
}

export default List;
