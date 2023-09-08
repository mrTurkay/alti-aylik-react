import { useState } from "react";
import ProductList from "../ProductList";
import SearchInput from "../SearchInput";

const HomeContent = () => {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <div className="contentWrapper">
      <SearchInput
        onSearchTermChanged={(value) => setSearchTerm(value)}
        searchTerm={searchTerm}
      />
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};
export default HomeContent;
