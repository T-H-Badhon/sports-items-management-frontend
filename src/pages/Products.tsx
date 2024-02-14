import { useState } from "react";
import FilterSider from "../components/FilterSider";
import {
  useAllProductsQuery,
  useDeleteProductMutation,
} from "../redux/api/productApi/productApi";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const [productQuery, setProductQuery] = useState("");

  const { data, isError } = useAllProductsQuery(productQuery);
  const [deleteProduct] = useDeleteProductMutation();

  if (!isError && !data) {
    return <h1 className="text-3xl"> Loading....</h1>;
  }

  const deleteFunc = async (id: string) => {
    await deleteProduct({ id: id });

    window.location.reload();
  };

  // const createVarient=()=>

  return (
    <div className="mx-10 mt-10 relative">
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
      <div className="z-20 absolute left-0 top-10 bg-white">
        <FilterSider
          collapsed={collapsed}
          setProductQuery={setProductQuery}
          setCollapsed={setCollapsed}
        ></FilterSider>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-0">
        {data?.data?.length
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data?.data.map((product: any) => (
              <ProductCard
                product={product}
                key={product._id}
                deleteFunc={deleteFunc}
              ></ProductCard>
            ))
          : null}
      </div>
    </div>
  );
};

export default Products;
