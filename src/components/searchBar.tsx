import { Label, TextInput } from "flowbite-react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Tprops = {
  searchFunction: SubmitHandler<FieldValues>;
};

const SearchBar = ({ searchFunction }: Tprops) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className=" mt-10 mb-5">
      <h1>Search products by name</h1>
      <form
        onSubmit={handleSubmit(searchFunction)}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div className="flex gap-3">
          <Label className="text-xl" htmlFor="name" value="Enter name:" />

          <TextInput
            className="md:min-w-64"
            id="name"
            type="text"
            sizing="sm"
            {...register("name")}
          />
          <button
            type="submit"
            className="py-2 px-2 bg-blue-950 text-white rounded-lg"
          >
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
