import { useState } from "react";
import FilterSider from "../components/FilterSider";
import { useAllProductsQuery } from "../redux/api/productApi/productApi";

const Products = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const [productQuery, setProductQuery] = useState("");

  const { data, isError } = useAllProductsQuery(productQuery);

  if (!isError && !data) {
    return <h1> there is an error</h1>;
  }

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
      <FilterSider
        collapsed={collapsed}
        setProductQuery={setProductQuery}
      ></FilterSider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"></div>
    </div>
  );
};

export default Products;
