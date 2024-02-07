/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox } from "flowbite-react";

import { useForm } from "react-hook-form";

const DeleteProducts = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("h", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-2">
          <Checkbox id="1" value="value1" {...register("id")} />
          <div>fsdofpkdjf</div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="2" {...register("id")} />
          <div>fsdofpkdjf</div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="3" {...register("id")} />
          <div>fsdofpkdjf</div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="4" {...register("id")} />
          <div>fsdofpkdjf</div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="5" {...register("id")} />
          <div>fsdofpkdjf</div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="6" {...register("id")} />
          <div>fsdofpkdjf</div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="7" {...register("id")} />
          <div>fsdofpkdjf</div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="8" {...register("id")} />
          <div>fsdofpkdjf</div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="9" {...register("id")} />
          <div>fsdofpkdjf</div>
        </div>
        <Button type="submit">delete</Button>
      </form>
    </div>
  );
};

export default DeleteProducts;
