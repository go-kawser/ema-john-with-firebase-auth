import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { AuthContextType } from "../../..";

const SignUp: React.FC = () => {
  const [error, setError] = useState<string>("");
  const { createUser } = useContext(AuthContext) as AuthContextType;

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const confirm = (form.elements.namedItem("confirm") as HTMLInputElement)
      .value;

    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Your password must be 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error: Error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="w-[500px] h-[600px] mx-auto my-5 border border-gray-300 rounded-lg p-10">
      <h2 className="text-3xl text-center text-gray-800 mb-6">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full h-14 border border-gray-300 rounded px-3 text-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full h-14 border border-gray-300 rounded px-3 text-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="confirm" className="block text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm"
            required
            className="w-full h-14 border border-gray-300 rounded px-3 text-lg"
          />
        </div>
        <input
          className="w-full h-14 bg-amber-100 rounded border-none mt-5 text-xl text-gray-900 cursor-pointer hover:bg-amber-200"
          type="submit"
          value="Sign Up"
        />
      </form>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      <p className="mt-4">
        <small>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </small>
      </p>
    </div>
  );
};

export default SignUp;
