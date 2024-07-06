import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../services/auth";
import { useRouter } from "next/router";

export default function Nav({ children, background }) {
  const navList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Solutions",
      link: "/solution",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "About us",
      link: "/about",
    },
  ];
  const { authed, logout } = useAuth();
  const router = useRouter();

  const onLogoutClick = async () => {
    await logout();
    router.reload();
  };
  return (
    <div className="nav-bar">
      <div className="logo-box-box">
        <div className="logo-box">
          <Image src="/images/footer-logo.png" fill alt="logo" />
        </div>
        <span className="logo-txt">SET</span>
      </div>

      <div className="nav">
        {navList.map((item, i) => (
          <Link href={item.link} key={i}>
            <span className="nav-txt">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="items">
        <button className="login-btn btn">Log in</button>
        <button className="free-btn btn">Free Trial</button>
      </div>
      <style jsx>{`
        .nav-bar {
          color: white;
          width: 100%;
          height: 91px;
          background-color: #365154;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          .logo-box-box {
            display: flex;
            align-items: center;
            .logo-box {
              position: relative;
              width: 90px;
              height: 57px;
            }
            .logo-txt {
              font-size: 2.5rem;
              letter-spacing: 4px;
            }
          }
        }

        .nav {
          .nav-txt {
            margin: 0 15px;
          }
        }

        .items {
          .btn {
            padding: 10px 20px;
            border: 1px solid white;
            border-radius: 50px;
          }

          .login-btn {
            margin: 0 10px;
          }

          .free-btn {
            background-color: #939cb2;
            border-color: #939cb2;
          }
        }
      `}</style>
    </div>
  );
}
