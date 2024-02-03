import { Label, TextInput } from "flowbite-react";
import React from "react";

const AddProduct = () => {
  return (
    <div className="mx-auto mt-5 md:mt-20">
      <h1 className="text-2xl text-blue-950 font-bold my-8">Add Product</h1>
      <form className="flex max-w-md flex-col gap-4 mx-auto">
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-4">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Product name:" />
            </div>
            <TextInput id="name" type="text" sizing="sm" />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="brand" value="Brand:" />
            </div>
            <TextInput id="brand" type="text" sizing="sm" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price:" />
            </div>
            <TextInput id="price" type="text" sizing="sm" />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="sportsType" value="Sports Type:" />
            </div>
            <TextInput id="sportsType" type="text" sizing="sm" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity:" />
            </div>
            <TextInput id="quantity" type="text" sizing="sm" />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="condition" value="Condition:" />
            </div>
            <TextInput id="condition" type="text" sizing="sm" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="material" value="Material:" />
            </div>
            <TextInput id="material" type="text" sizing="sm" />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="color" value="Color:" />
            </div>
            <TextInput id="color" type="text" sizing="sm" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="size" value="Size (optional):" />
            </div>
            <TextInput id="size" type="text" sizing="sm" />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="weignt" value="Weight(KG) (optional):" />
            </div>
            <TextInput id="weignt" type="text" sizing="sm" />
          </div>
        </div>

        <button
          type="submit"
          className="px-5 py-3 bg-blue-950 text-white rounded-2xl"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
