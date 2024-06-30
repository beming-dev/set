"use client";
import LoginForm from "/components/LoginForm";
import styles from "/styles/Home.module.css";
import Header from "/components/Header";
import RegisterForm from "/components/RegisterForm";

function Register() {
  return (
    <div className={styles.bodyAbout}>
      <Header />
      <RegisterForm />
    </div>
  );
}
