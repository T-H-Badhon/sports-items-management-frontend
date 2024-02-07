import SearchBar from "../components/searchBar";

const SellProducts = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchFunction = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <SearchBar searchFunction={searchFunction}></SearchBar>
      <br />
      <div className="mx-10">
        <h1 className="text-xl text-left">Products:</h1>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"></div>
      </div>
    </div>
  );
};

export default SellProducts;
