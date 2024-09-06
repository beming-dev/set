import Image from "next/image";
import { useAuth } from "/services/auth";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { questionValueState } from "../src/recoil/questionState";
import { authedRequest } from "../src/services/http";
import { useRouter } from "next/router";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

export default function Signup() {
  const [question, setQuestion] = useRecoilState(questionValueState);

  const signupList = [
    { name: "firstname" },
    { name: "lastname" },
    { name: "email" },
    { name: "password" },
    { name: "confirm" },
  ];
  const { login } = useAuth();

  const handleSubmit = async (formData) => {
    try {
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
    } catch (err) {
      if (err.response.status == 400) alert("This is a duplicate email.");
    }
  };
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "firstname must be longer than 2 characters")
      .required("firstname required"),
    lastname: Yup.string()
      .min(2, "lastname must be longer than 2 characters")
      .required("lastname required"),
    email: Yup.string()
      .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "wrong form")
      .required("email required"),
    password: Yup.string()
      .min(8, "Your password must be longer than 8 characters.")
      .max(20, "Your password must be shorter than 20 characters.")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
        "Your password must contain at least one uppercase letter and one special character."
      )
      .required("password required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password is not matched") // 비밀번호 확인과 비교
      .required("confirm password required."),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
  };
  const router = useRouter();
  const ErrorMessageComponent = (props) => <span role="alert" {...props} />;
  const fieldName = (name) => {
    switch (name) {
      case "firstname":
      case "lastname":
        return "text";
        break;
      case "email":
        return "email";
        break;
      case "password":
      case "confirm":
        return "password";
        break;
      default:
        break;
    }
  };
  return (
    <div className="signup">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full flex justify-center items-center">
          <div className="signup-box">
            {signupList.map((item, i) => (
              <div key={i} className="input-box">
                <label className="label" htmlFor={item.name}>
                  {item.name}
                </label>
                <Field
                  name={item.name}
                  className="input"
                  placeholder={item.name}
                  type={fieldName(item.name)}
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    borderRadius: "50px",
                    padding: "10px 10px",
                    marginTop: "5px",
                  }}
                />
                <ErrorMessage
                  name={item.name}
                  style={{ color: "red" }}
                  component={ErrorMessageComponent}
                />
              </div>
            ))}
            <button type="submit" className="signup-btn">
              SignUp!
            </button>
          </div>
        </Form>
      </Formik>
      <style jsx>
        {`
          .signup {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 100px 0;
            .signup-box {
              width: 60%;
              display: flex;
              flex-direction: column;
              align-items: center;
              .input-box {
                width: 100%;
                margin-top: 30px;
                .input {
                  border: 1px solid black;
                  width: 100%;
                  border-radius: 50px;
                  padding: 10px 10px;
                }
                .label {
                  align-self: start;
                }
              }

              .signup-btn {
                width: fit-content;
                padding: 15px 50px;
                border-radius: 50px;
                background-color: #6db9ff;
                margin-top: 50px;
                transition-duration: 1s;
              }
              .signup-btn:hover {
                background: white;
              }
            }
          }

          @media (max-width: 1200px) {
          }

          @media (max-width: 800px) {
          }
        `}
      </style>
    </div>
  );
}
