/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { varifyToken } from "../utilities/varifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/slices/authSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const onSubmit = async (data: any) => {
    const res = await login(data).unwrap();
    const userInfo = varifyToken(res.data.token);
    console.log(userInfo);
    dispatch(setUser(userInfo));

    navigate("/");
  };

  return (
    <div className="container mt-20 md:mt-40 mx-auto">
      <h1 className="text-xl text-center text-blue-700">Login !</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="username"
            type="text"
            required
            {...register("username")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            {...register("password")}
          />
        </div>
        <div>
          <h1>
            Don't have account?{" "}
            <Link to="/register">
              <span className="text-blue-700">Register Now</span>
            </Link>
          </h1>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
