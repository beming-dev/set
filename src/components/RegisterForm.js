"use client";
import { useEffect, useMemo, useState } from "react";
import { authedRequest } from "/services/http";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";
import { useAuth } from "/services/auth";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const twoPasswordSameInValid = useMemo(() => {
    return (
      formData.password.trim() && formData.password !== formData.confirmPassword
    );
  }, [formData]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await authedRequest.post(`/api/register`, { ...formData });
      if (res.status === 201) {
        alert("Register success");
        const data = res.data;
        const token = data.token;
        const userData = data.profile;
        login(userData, token).then(() => {
          router.push(`/`);
        });
      }
    } catch (err) {}
  };

  return (
    <section>
      <div className="flex flex-col items-center px-6 mx-auto lg:py-6">
        <div className="w-full bg-white rounded-lg border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-3xl font-bold leading-tight tracking-tight text-whale">
              Create an account
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-whale hover:underline"
                >
                  Login here
                </Link>
              </p>
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First name
                </label>
                <input
                  value={formData.firstname}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      firstname: e.target.value,
                    });
                  }}
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last name
                </label>
                <input
                  value={formData.lastname}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      lastname: e.target.value,
                    });
                  }}
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Last name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
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
                  className="block mb-2 text-sm font-medium text-gray-900"
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
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    });
                  }}
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              {twoPasswordSameInValid && (
                <p className={"my-2 text-red-500 text-sm"}>
                  Two password must be the same
                </p>
              )}
              <button
                type="submit"
                className="w-full text-white bg-grizzlybear hover:bg-brownbear focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
