import { useState } from "react";
import FilterSider from "../components/FilterSider";

const Products = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="mx-10 mt-10">
      <div className="flex justify-between">
        <h1 className="text-xl text-left">Products:</h1>
        <button
          onClick={handleToggleSidebar}
          className="px-5 py-3 bg-blue-950 text-white rounded-2xl"
        >
          Filters
        </button>
      </div>
      <hr />
      <FilterSider collapsed={collapsed}></FilterSider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"></div>
    </div>
  );
};

export default Products;
