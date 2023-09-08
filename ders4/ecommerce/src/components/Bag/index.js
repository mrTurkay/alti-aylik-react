import { Link } from "react-router-dom";
import { useBag } from "../../contexts/BagContext";

const Bag = () => {
  const { items, increaseCount, decreaseCount } = useBag();
  console.log(items);
  return (
    <div className="bagWrapper">
      <h2>Bag</h2>
      {items.map((item) => {
        return (
          <div className="bagItemWrapper">
            <img
              src={item.product.image}
              alt={item.product.title}
              className="bagItemImage"
            />
            <div>
              <Link to={`/product/${item.product.id}`}>
                <h4> {item.product.title}</h4>
              </Link>
              <div>
                <button
                  onClick={() => {
                    decreaseCount(item.product.id);
                  }}
                >
                  -
                </button>
                Count: {item.count}
                <button onClick={() => increaseCount(item.product.id)}>
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}; 
export default Bag;
