import LoginForm from "/components/LoginForm";
import styles from "/styles/Home.module.css";
import Header from "/components/Header";

function Login() {
  return (
    <div className={styles.bodyAbout}>
      <Header />
      <LoginForm />
    </div>
  );
}
