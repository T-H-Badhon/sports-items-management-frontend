import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="container mt-20 md:mt-40 mx-auto">
      <h1 className="text-xl text-center text-blue-700">Register now</h1>
      <form className="flex max-w-md flex-col gap-4 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput id="name" type="text" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput id="username" type="text" required shadow />
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
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeatPassword" value="Repeat password" />
          </div>
          <TextInput id="repeatPassword" type="password" required shadow />
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
