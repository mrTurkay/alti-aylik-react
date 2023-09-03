import Sidebar from "../Sidebar";

const Layout = ({ children }) => (
  <div className="AppWrapper">
    <div className="App">
      <Sidebar />
      {children}
    </div>
  </div>
);

export default Layout;
