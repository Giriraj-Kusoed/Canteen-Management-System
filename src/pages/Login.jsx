import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your Email and password");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff8f1] px-4 py-10">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

        <div className="flex flex-col justify-center bg-[#f47b45] px-8 py-14 text-white md:px-12">

          <h1 className="mb-4 text-4xl font-extrabold">
            Welcome Back!
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-orange-50">
            Order ahead, skip the queue, and enjoy your food!
          </p>

          <div className="rounded-2xl bg-white/15 p-6">
            <p className="text-5xl">🍔</p>
            <h2 className="mt-4 text-xl font-bold">
              Smart Canteen
            </h2>
            <p className="mt-2 text-sm text-orange-50">
              Fresh food. Faster service. 
            </p>
          </div>

        </div>

        <div className="px-8 py-12 md:px-12">

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Login
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to your student account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email 
              </label>

              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div className="flex items-center justify-between gap-3 text-sm">

              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-orange-500"
                />
                Remember me
              </label>

            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#f47b45] py-3 font-semibold text-white shadow-md transition hover:bg-orange-600"
            >
              Login
            </button>

          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
              <Link
                to="/ForgotPassword"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                Forgot password?
              </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;