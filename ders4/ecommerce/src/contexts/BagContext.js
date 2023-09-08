import { createContext, useContext, useState } from "react";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const decreaseCount = (productId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const increaseCount = (productId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const addProductToBag = (product) => {
    // TODO: eger urun sepette varsa, sadece sayisini artir
    setItems((prevItems) => [
      ...prevItems,
      {
        count: 1,
        product,
      },
    ]);
  };

  return (
    <BagContext.Provider
      value={{ items, setItems, decreaseCount, increaseCount, addProductToBag }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => useContext(BagContext);
