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
      name: "Buyers",
      link: "/buying",
    },
    {
      name: "Sellers",
      link: "/selling",
    },
    {
      name: "Who are we",
      link: "/#meet",
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
      <div className="header">
        <Link href="/blog">
          <span className="text-01">Blog</span>
        </Link>
        {authed ? (
          <span onClick={onLogoutClick} className="login text-01">
            Log out
          </span>
        ) : (
          <Link href="/login">
            <span className="login text-01">Log in</span>
          </Link>
        )}
        <span className="text-01">ENG</span>
      </div>
      <div className="nav">
        <Link href="/">
          <div className="logo-box">
            <Image src={"/images/logo.png"} alt="logo" fill />
          </div>
        </Link>
        <div className="nav-list">
          {navList.map((item, i) => (
            <Link href={item.link} key={i}>
              <div className="nav-item">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .nav-bar {
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          .header {
            width: calc(100vw);
            height: 39px;
            background-color: #001024;
            display: flex;
            align-items: center;
            color: white;
            display: flex;
            justify-content: flex-end;
            padding-right: 10%;

            .text-01 {
              margin: 0 10px;
            }
            .login {
              border: 1px solid #6db9ff;
              padding: 2px 10px;
              border-radius: 20px;
              color: #6db9ff;
              cursor: pointer;
            }
          }
          .nav {
            width: 100%;
            display: flex;
            height: 100px;
            align-items: center;
            justify-content: space-between;
            padding: 0 10%;
            .logo-box {
              position: relative;
              width: 75px;
              height: 79px;
            }
            .nav-list {
              display: flex;
              .nav-item {
                margin: 0 20px;
              }
            }
          }
        }
        @media (max-height: 730px) {
          .nav-bar {
            margin-bottom: 200px;
          }
        }

        @media (max-height: 1200px) {
          .nav-bar {
            .header {
              span {
                margin: 0 5px;
              }
            }

            .nav {
              .logo-box {
                width: calc(75px * 7 / 10);
                height: calc(79px * 7 / 10);
              }

              .nav-list {
                .nav-item {
                  margin: 0 10px;
                }
              }
            }
          }
        }
        @media (max-height: 768px) {
          .nav-bar {
            margin-bottom: 0px;
          }
        }
      `}</style>
    </div>
  );
}
