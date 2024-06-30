// Header.js

import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="logo-box">
        <Image src="/images/footer-logo.png" fill alt="logo" />
      </div>
      <div className="content">
        <div className="left">
          <span className="text">silvereratransition.com</span>
          <span className="text">Complaints procedure</span>
          <span className="text">
            <Link href="/tandc">Terms and Conditions</Link>
          </span>
          <span className="text">Terms of Use</span>
          <span className="text">
            <Link href="/privacyPolicy">Privacy Policy</Link>
          </span>
          <span className="text">Cookie Policy</span>
          <span>Sitemap</span>
        </div>
        <div className="right">
          <div className="top">
            <div className="tools">
              <span className="title">Tools</span>
              <span className="text">Book</span>
              <span className="text">Search Service</span>
              <span className="text">News Letter</span>
              <span className="text">FAQs</span>
            </div>
            <div className="contract">
              <span className="title">Contact</span>
              <Link href="mailto:SETdenhaag@gmail.com" className="text">
                Email
              </Link>
              <span className="text">LinkedIn</span>
              <span className="text">Instagram</span>
              <span className="text">Twitter</span>
            </div>
          </div>
          <div className="bottom">
            <span className="text-01">Join Our Newsletter</span>
            <div className="submit-box">
              <button className="btn-submit">SUBMIT</button>
              <input
                className="input"
                type="text"
                placeholder="Email Address"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          display: flex;
          flex-direction: column;
          background-color: #001024;
          margin-top: 100px;
          color: white;
          padding-bottom: 100px;
          position: relative;
          .logo-box {
            position: relative;
            width: 173px;
            height: 117px;
          }

          .content {
            display: flex;
            justify-content: center;

            .title {
              font-size: 2rem;
              margin-bottom: 20px;
              font-weight: 500;
            }
            .text {
              font-weight: 100;
              margin: 3px 0;
            }
            .left {
              display: flex;
              flex-direction: column;
              margin-right: 100px;
            }
            .right {
              display: flex;
              flex-direction: column;

              .top {
                display: flex;
                .tools {
                  display: flex;
                  flex-direction: column;
                  margin-right: 100px;
                }
                .contract {
                  display: flex;
                  flex-direction: column;
                }
              }

              .bottom {
                margin-top: 30px;
                width: 100%;
                .text-01 {
                  font-size: 2rem;
                  font-weight: bold;
                }

                .submit-box {
                  width: 100%;
                  height: 61px;
                  position: relative;
                  margin-top: 30px;
                  .input {
                    width: 100%;
                    height: 100%;
                    background-color: rgba(88, 162, 195, 0.42);
                    border-radius: 50px;
                    outline: none;
                    padding-left: 35%;
                  }
                  .btn-submit {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    background-color: #6db9ff;
                    padding: 0 20px;
                    border-radius: 50px;
                    color: black;
                    width: 30%;
                  }
                }
              }
            }
          }
        }
        @media (max-width: 768px) {
          .footer {
            align-items: center;
            .logo-box {
              position: relative;
              width: calc(173px * 4 / 5);
              height: calc(117px * 4 / 5);
            }
            .content {
              flex-direction: column;
              align-items: center;
              .left {
                margin: 0;
                margin-bottom: 20px;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
export default Footer;
