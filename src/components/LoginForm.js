import { useState } from "react";
import Link from "next/link";
import { authedRequest } from "/services/http";
import { useAuth } from "/services/auth";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const { login } = useAuth();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await authedRequest.post(`/api/login`, { ...formData });
      if (res.status === 200) {
        alert("Login success");
        const data = res.data;
        const token = data.token;
        login(data, token).then(() => {
          router.replace(`/`);
        });
      }
    } catch (err) {
      if (err.response.status === 404) {
        alert("Email not found");
      }
      if (err.response.status === 400) {
        alert("Password is invalid");
      }
    }
  };

  return (
    <section className="bg-white">
      <div className="flex flex-col items-center h-screen px-6 mx-auto lg:py-6">
        <div className={"mt-6"}></div>
        <div className="w-full bg-white rounded-lg border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-8">
            <p className="text-3xl text-whale font-bold leading-tight tracking-tight">
              Log in to your account
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <p className="text-sm text-gray-500 mt-2 flex gap-2">
                Don't have an account yet?
                <Link
                  href="/register"
                  className="font-medium text-whale hover:underline "
                >
                  Register here
                </Link>
              </p>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-grizzlybear hover:bg-brownbear focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
