import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Register = ({ setCurrentPage }) => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (
      fullName.trim().length < 3 ||
      !email.includes("@") ||
      password.length < 6
    )
      return setMessage("Please enter valid details");

    if (password !== confirmPassword)
      return setMessage("Passwords did not match");

    setMessage("Registration successful");
  };
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 py-12">
      <h1 className=" text-[#14213d] text-3xl font-bold mb-2">
        Create Account
      </h1>
      <p className="text-gray-500 mb-6">
        {" "}
        Join Shopora and discover products you'll love.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm max-w-md w-full p-8"
      >
        <input
          type="text"
          required
          autoComplete="name"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullname(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring focus:ring-[#2dd4bf]"
        />
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring focus:ring-[#2dd4bf]"
        />
        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3  focus:outline-none focus:ring focus:ring-[#2dd4bf] pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <div className="relative mb-4">
          {/* Conform Password */}
          <input
            type={showConfirmPassword  ? "text" : "password"}
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-[#2dd4bf] pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {/* <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide Password" : "Show Password"}{" "}
          {showPassword ? <EyeOff /> : <Eye />}
        </button> */}
        {message && (
          <p
            className={`my-4 text-sm text-center ${message === "Registration successful" ? "text-green-600" : "text-red-600"}`}
          >
            {message}
          </p>
        )}
        <button type="submit" className="w-full bg-[#14213d] text-white py-3 rounded-lg font-semibold hover:bg-[#2dd4bf] hover:text-[#14213d] transition duration-300" >Create account</button>
        <p>
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setCurrentPage("login")}
            className="text-[#14213d] font-semibold hover:text-[#2dd4bf]"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
