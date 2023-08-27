import categories from "./categories";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="allCategory">All</h2>
      {categories.map((category) => (
        <h2 className="category">{category}</h2>
      ))}
    </div>
  );
};

export default Sidebar;
