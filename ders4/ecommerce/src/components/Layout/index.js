import Bag from "../Bag";
import Sidebar from "../Sidebar";
import { BagProvider, useBag } from "../../contexts/BagContext";

const Layout = ({ children }) => {
  const { items } = useBag();
  console.log("layout", { items });
  return (
    <div className="AppWrapper">
      <div className="App">
        <Sidebar />
        {children}
        <Bag />
      </div>
    </div>
  );
};

export default Layout;
