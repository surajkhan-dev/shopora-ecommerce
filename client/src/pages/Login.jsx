import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = ({ setCurrentPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login form submitted");

    if (email.includes("@") && password.length >= 6)
      setMessage("Login Successfully");
    else setMessage("Invalid email or password");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 py-12">
      <h1 className="text-[#14213d] text-3xl font-bold mb-2">Welcome Back</h1>
      <p>Login to Your Shopora account</p>

      <form
        onSubmit={handleLogin}
        className="bg-white rounded-lg shadow-sm max-w-md w-full p-8 "
      >
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]"
        />
        <div className="relative mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="Enter your password"
            className="w-full pr-10  border border-gray-300 rounded-lg p-3  focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]"
          />
          <button
            type="button"
            className="absolute right-3 top-[42px] "
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#" className="text-[#14213d] hover:underline text-sm">
            Forgot Password
          </a>
        </div>
        {message && (
          <p
            className={` mt-4 text-center text-sm  ${message === "Login Successfully" ? "text-green-600" : "text-red-600"}`}
          >
            {message}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-[#14213d] text-white py-3 rounded-lg hover:bg-[#2dd4bf] transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => setCurrentPage("register")}
            className="text-[#14213d] font-semibold hover:text-[#2dd4bf]"
          >
            Create Account
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
