
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Your reset request has been submitted successfully!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-orange-50 p-5">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-2xl font-bold text-gray-800">
          Forgot Password?
        </h1>

        <p className="my-4 text-sm text-gray-500">
          Enter your email address to request a password reset.
        </p>

        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage("");
            }}
            className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-orange-500 p-3 font-semibold text-white transition hover:bg-orange-600 active:scale-95"
          >
            Send Reset Link
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm font-medium text-orange-600">
            {message}
          </p>
        )}

        <Link
          to="/"
          className="mt-5 block text-center text-sm text-orange-600 hover:underline"
        >
          Back to Login
        </Link>

      </div>
    </div>
  );
}

export default ForgotPassword;
