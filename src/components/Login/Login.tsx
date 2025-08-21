import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { AuthContextType } from "../../..";

const Login: React.FC = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error: Error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="w-[500px] h-[600px] mx-auto my-5 border border-gray-300 rounded-lg p-10">
      <h2 className="text-3xl text-center text-gray-800 mb-6">Login</h2>
      <form onSubmit={handleLogin}>
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
            type={show ? "text" : "password"}
            name="password"
            required
            className="w-full h-14 border border-gray-300 rounded px-3 text-lg"
          />
          <p
            onClick={() => setShow(!show)}
            className="text-blue-500 cursor-pointer mt-1"
          >
            <small>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        <input
          className="w-full h-14 bg-amber-100 rounded border-none mt-5 text-xl text-gray-900 cursor-pointer hover:bg-amber-200"
          type="submit"
          value="Login"
        />
      </form>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      <p className="mt-4">
        <small>
          New To Ema-John?{" "}
          <Link to="/sign-up" className="text-blue-500">
            Create New Account
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
