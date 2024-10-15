import Item from "./Item";

const ItemsList = ({ items }) => {
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item">
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ol>
      </div>
    );
  };

export default ItemsList;