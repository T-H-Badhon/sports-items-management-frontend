/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../redux/api/auth/authApi";

const Registration = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const [signUp] = useSignUpMutation();

  const onSubmit = async (data: any) => {
    if (data.password !== data.repeatPassword) {
      alert("Password not Matched");
      return;
    }

    const res = await signUp(data);

    if (res && "error" in res) {
      const error: any = res.error;

      alert(error.data.errorMessage);
      return;
    }

    console.log(res, "hi");

    navigate("/login");
  };

  return (
    <div className="container mt-20 md:mt-40 mx-auto">
      <h1 className="text-xl text-center text-blue-700">Register now</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            type="text"
            required
            shadow
            {...register("name")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            type="text"
            required
            shadow
            {...register("username")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="example@gmail.com"
            required
            shadow
            {...register("email")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            required
            shadow
            {...register("password")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeatPassword" value="Repeat password" />
          </div>
          <TextInput
            id="repeatPassword"
            type="password"
            required
            shadow
            {...register("repeatPassword")}
          />
        </div>

        <div>
          <h1>
            Already have account?
            <Link to="/login">
              <span className="text-blue-700">Login</span>
            </Link>
          </h1>
        </div>

        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};

export default Registration;
