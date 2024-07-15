import Header from "/components/Header";
import ChatButton from "./ChatButton";
import Nav from "./Nav";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Head from "next/head";
import { useAuth } from "../services/auth";

export default function Layout({ children, background }) {
  const router = useRouter();
  const { authed } = useAuth();

  const onScanClick = () => {
    router.push("/question");
  };
  return (
    <div>
      <Head>
        <title>SET</title>
      </Head>
      {/* <ChatButton />
      {!authed && (
        <button className="scan-btn" onClick={onScanClick}>
          Scan your opportunity
        </button>
      )} */}
      <header>
        <Header />
      </header>
      <main className="main">
        <Nav />
        <div className="main-box">{children}</div>
      </main>
      <Footer />
      <style jsx>
        {`
          .scan-btn {
            z-index: 2;
            position: fixed;
            bottom: 100px;
            right: 20px;
            font-size: 1.5rem;
            padding: 20px 30px;
            background-color: #6db9ff;
            border-radius: 50px;
            font-weight: 600;
          }
          .main {
            width: 100vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .main-box {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
          @media (max-width: 1200px) {
            .scan-btn {
              padding: 15px 20px;
            }
          }
          @media (max-width: 768px) {
            .scan-btn {
              font-size: 1.2rem;
              padding: 10px 15px;
            }
          }
        `}
      </style>
    </div>
  );
}
