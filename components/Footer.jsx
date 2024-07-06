// Header.js

import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="logo-box">
          <div className="logo-image-box">
            <Image src="/images/footer-logo.png" fill alt="logo" />
          </div>
          <h1 className="logo-txt">SET</h1>
        </div>
        <span className="txt-01">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet neque tortor.{" "}
        </span>
        <div className="icon-box">
          <div className="icon-image-box">
            <Image src="/images/twitter.png" fill />
          </div>
          <div className="icon-image-box">
            <Image src="/images/insta.png" fill />
          </div>
          <div className="icon-image-box">
            <Image src="/images/facebook.png" fill />
          </div>
          <div className="icon-image-box">
            <Image src="/images/youtube.png" fill />
          </div>
        </div>
      </div>
      <div className="center">
        <h2>Quick Links</h2>
        <span className="txt-01">About Us</span>
        <span className="txt-01">Service</span>
        <span className="txt-01">Pricing</span>
        <span className="txt-01">Blog</span>
      </div>
      <div className="right">
        <h2>Contact Us</h2>
        <div className="txt-01-box">
          <div className="image-box">
            <Image src="/images/email.png" fill />
          </div>
          <span className="txt-01">info@tomatoworld.nl</span>
        </div>
        <div className="txt-01-box">
          <div className="image-box">
            <Image src="/images/position.png" fill />
          </div>
          <span className="txt-01">
            TomatoWorld  Zwethlaan 2, 2675 LB Honselersdijk
          </span>
        </div>
        <div className="txt-01-box">
          <div className="image-box">
            <Image src="/images/call.png" fill />
          </div>
          <span className="txt-01">
            <u>0174 612 525</u>
          </span>
        </div>
      </div>
      <style jsx>{`
        .footer {
          width: 100vw;
          background-color: #365154;
          color: white;
          display: flex;
          padding: 150px 5%;
          align-items: start;
          justify-content: space-between;

          .left {
            display: flex;
            flex-direction: column;

            .logo-box {
              display: flex;
              align-items: center;
              .logo-txt {
                padding: 0;
                color: white;
              }
              .logo-image-box {
                position: relative;
                width: 100px;
                height: 60px;
              }
            }

            .txt-01 {
              max-width: 270px;
              margin: 20px 0;
            }

            .icon-box {
              display: flex;

              .icon-image-box {
                position: relative;
                width: 35px;
                height: 35px;
                margin-right: 20px;
              }
            }
          }
          .center {
            display: flex;
            flex-direction: column;

            .txt-01 {
              margin: 10px 0;
            }
          }
          .right {
            display: flex;
            flex-direction: column;

            .image-box {
              position: relative;
              width: 15px;
              height: 15px;
            }
            .txt-01-box {
              display: flex;
              align-items: center;
              margin: 10px 0;
              .image-box {
                margin-right: 10px;
                width: 15px;
                height: 15px;
                position: relative;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
export default Footer;
