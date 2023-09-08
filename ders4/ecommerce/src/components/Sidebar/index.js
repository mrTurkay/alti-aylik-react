import { Link } from "react-router-dom";
import { HomeIcon, Logo, LogoutIcon, MenuIcon } from "../../assets";

const Sidebar = () => {
  return (
    <nav className="sidebarWrapper">
      <div className="sidebarTop">
        <Logo />
        <MenuIcon />
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
      <div>
        <LogoutIcon />
      </div>
    </nav>
  );
};

export default Sidebar;
