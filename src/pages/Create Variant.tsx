import { Label, TextInput } from "flowbite-react";

import { useForm } from "react-hook-form";
import {
  useAddProductMutation,
  useAllProductsQuery,
} from "../redux/api/productApi/productApi";
import { useNavigate, useParams } from "react-router-dom";

const CreateVariant = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  const { id } = useParams();

  const { data } = useAllProductsQuery({ _id: id });

  if (data) {
    Object.keys(data.data[0]).forEach((fieldName) => {
      setValue(fieldName, data.data[0][fieldName]);
    });
  }

  const product = data?.data[0];

  const [AddProduct] = useAddProductMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    if (data._id) {
      delete data._id;
    }

    if (!data.size) {
      delete data.size;
    }

    data.price = parseInt(data.price);
    data.quantity = parseInt(data.quantity);
    data.size = parseInt(data.size);
    data.weight = parseFloat(data.weight);
    if (!data.size) {
      delete data.size;
    }
    if (!data.weight) {
      delete data.weight;
    }

    const res = await AddProduct(data);

    if ("data" in res) {
      alert("product variant added Successfully");
    }
    if ("error" in res) {
      alert("Faied to create variant!");
      return;
    }

    navigate("/products");
    window.location.reload();
  };

  return (
    <div className="mx-auto mt-5 md:mt-20">
      <h1 className="text-2xl text-blue-950 font-bold my-8"> Create Variant</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-4">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Product name:" />
            </div>
            <TextInput
              id="name"
              type="text"
              sizing="sm"
              defaultValue={product?.name}
              {...register("name")}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="brand" value="Brand:" />
            </div>
            <TextInput
              id="brand"
              type="text"
              sizing="sm"
              defaultValue={product?.brand}
              {...register("brand")}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price (tk):" />
            </div>
            <TextInput
              id="price"
              type="text"
              sizing="sm"
              defaultValue={product?.price}
              {...register("price")}
            />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="sportsType" value="Sports Type:" />
            </div>
            <TextInput
              id="sportsType"
              type="text"
              sizing="sm"
              defaultValue={product?.sportsType}
              {...register("sportsType")}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity:" />
            </div>
            <TextInput
              id="quantity"
              type="text"
              sizing="sm"
              defaultValue={product?.quantity}
              {...register("quantity")}
            />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="condition" value="Condition:" />
            </div>
            <TextInput
              id="condition"
              type="text"
              sizing="sm"
              defaultValue={product?.condition}
              {...register("condition")}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="material" value="Material:" />
            </div>
            <TextInput
              id="material"
              type="text"
              sizing="sm"
              defaultValue={product?.material}
              {...register("material")}
            />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="color" value="Color:" />
            </div>
            <TextInput
              id="color"
              type="text"
              sizing="sm"
              defaultValue={product?.color}
              {...register("color")}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="size" value="Size (optional):" />
            </div>
            <TextInput
              id="size"
              type="text"
              sizing="sm"
              defaultValue={product?.size}
              {...register("size")}
            />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="weight" value="Weight(KG) (optional):" />
            </div>
            <TextInput
              id="weight"
              type="text"
              sizing="sm"
              defaultValue={product?.weight}
              {...register("weight")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-5 py-3 bg-blue-950 text-white rounded-2xl"
        >
          Add Variant
        </button>
      </form>
    </div>
  );
};

export default CreateVariant;
