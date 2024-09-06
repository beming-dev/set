import Image from "next/image";
import { useAuth } from "/services/auth";
import { useState } from "react";
import Link from "next/link";
import { authedRequest } from "../src/services/http";
import { useRouter } from "next/router";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const router = useRouter();

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
      if (err.response?.status === 404) {
        alert("Email not found");
      }
      if (err.response?.status === 400) {
        alert("Password is invalid");
      }
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="left">
        <span className="title">Login</span>
        <div className="input-box">
          <label
            htmlFor="email"
            className="label block mt-5 text-lg font-medium text-gray-900 "
          >
            email
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
            placeholder="name@company.com"
            required
            className="input"
          />
          <label
            htmlFor="password"
            className="label block mt-5 text-lg font-medium text-gray-900 "
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
            placeholder="password"
            required
            className="input"
          />
        </div>
        <div className="signup-box">
          <span className="signup-link">Don't you have an account? </span>
          <Link href="/question">
            <u>Signup</u>
          </Link>
        </div>
        <button type="submit" className="login-btn">
          login
        </button>
      </div>
      <div className="right">
        <div className="image-box">
          <Image src="/images/login-01.png" fill alt="login" />
        </div>
        <button type="submit" className="btn-continue">
          Continue
        </button>
      </div>
      <style jsx>
        {`
          .login {
            display: flex;
            width: 1100px;
            height: auto;
            align-items: center;
            justify-content: space-between;
            margin: 100px 0;
            .left {
              display: flex;
              flex-direction: column;
              width: 50%;
              height: 100%;

              .signup-box {
                margin-top: 50px;
              }
              .label {
                margin-top: 50px;
              }

              .title {
                font-size: 4rem;
                font-weight: bold;
                margin-bottom: 150px;
              }

              .input-box {
                display: flex;
                flex-direction: column;
                width: 100%;

                .input {
                  width: 100%;
                  border: 2px solid black;
                  border-radius: 50px;
                  margin-top: 10px;
                  padding: 15px 20px;
                }
                .input::placeholder {
                  color: black;
                }
              }

              .login-btn {
                display: none;
                padding: 15px 30px;
                border-radius: 50px;
                background-color: #6db9ff;
                border-radius: 50px;
                margin-top: 20px;
                font-size: 1.2rem;
                transition-duration: 0.5s;
              }
              .login-btn:hover {
                background-color: #001024;
                color: white;
              }
            }
            .right {
              height: max-content;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: end;
              .image-box {
                position: relative;
                width: 435px;
                height: 435px;
                margin-bottom: 20px;
              }
              .btn-continue {
                padding: 15px 30px;
                border-radius: 50px;
                background-color: #6db9ff;
                border-radius: 50px;
                font-size: 1.2rem;
                transition-duration: 0.5s;
                margin-top: 20px;
              }
              .btn-continue:hover {
                background-color: #001024;
                color: white;
              }
            }
          }

          @media (max-width: 1200px) {
            .login {
              width: 768px;
              .left {
                .title {
                  margin-bottom: 70px;
                }

                .input-box {
                  display: flex;
                  flex-direction: column;
                  width: 100%;

                  .input {
                    width: 80%;
                    padding: 15px 20px;
                  }
                  .input::placeholder {
                    color: black;
                  }
                }
              }
              .right {
                .image-box {
                  width: 350px;
                  height: 350px;
                }
              }
            }
          }

          @media (max-width: 800px) {
            .login {
              width: 100%;
              height: 60vh;
              margin-top: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              .left {
                width: 100%;
                align-items: center;
                .title {
                  text-align: center;
                  font-size: 3rem;
                  margin-bottom: 10px;
                }
                .input-box {
                  align-items: center;

                  .input {
                    margin: 15px 0;
                  }
                }

                .login-btn {
                  width: 50%;
                  display: block;
                }
              }
              .right {
                display: none;
              }
            }
          }
        `}
      </style>
    </form>
  );
}
