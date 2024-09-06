//selling.js
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Selling() {
  const steps = [
    "Create an account, upload the necessary documents and describe your vision to SET.",
    "Use the filters and prompts to screen and speed up your matching process.",
    "Connect and reach out with the seller. Good feeling? Setup a meeting!",
    "Run your due-diligence and if everything looks good negotiate!",
  ];
  const router = useRouter();
  return (
    <div className="selling">
      <div className="content-01">
        <span className="title">Buying a company?</span>
        <span className="text-01">
          Find the <u>ideal</u> business quickly
        </span>
        <div className="sell-image-box">
          <Image src="/images/sell.png" fill alt="sell" />
        </div>
      </div>
      <div className="content-02">
        <div className="title">The 4 Steps</div>
        <div className="step-box">
          {steps.map((text, idx) => (
            <div className="step-item" key={idx}>
              <div className="numbering">{idx}</div>
              <span className="text-01">{text}</span>
            </div>
          ))}
        </div>
        <button className="search-btn" onClick={() => router.push("/search")}>
          Search your opportunity
        </button>
      </div>
      <div className="content-03">
        <div className="price-chart-box">
          <Image src="/images/buy-price.png" alt="price-chart" fill />
        </div>
      </div>
      <div className="content-04">
        <span className="title">Not sure whether to sell?</span>
        <span className="text-01">Check out these</span>
        <div className="arrow-box">
          <div className="arrow-image-box arrow-01">
            <Image src="/images/arrow-02.png" fill alt="arrow" />
          </div>
          <div className="arrow-image-box arrow-02">
            <Image src="/images/arrow-01.png" fill alt="arrow" />
          </div>
        </div>
        <div className="button-box">
          <button className="btn">Selling a company: Blog</button>
          <button className="btn">Free company valuation</button>
        </div>
      </div>
      <style jsx>
        {`
          .selling {
            width: 100vw;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            .title {
              font-weight: bold;
            }
            .content-01 {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100vh;
              .title {
                font-size: 4rem;
                font-weight: bold;
                margin-bottom: 30px;
              }
              .text-01 {
                font-size: 2rem;
              }
              .sell-image-box {
                position: relative;
                width: 528px;
                height: 528px;
              }
            }
            .content-02 {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 50px;
              .search-btn {
                background-color: #084bca;
                color: white;
                padding: 20px 40px;
                font-size: 2rem;
                border-radius: 50px;
                margin-top: 50px;
              }
              .title {
                font-size: 4rem;
                color: #6db9ff;
                margin-bottom: 80px;
              }

              .step-box {
                display: flex;
                flex-direction: column;
                width: 100%;
                .step-item {
                  width: 100%;
                  display: flex;
                  align-items: center;
                  margin: 20px 0;
                  .numbering {
                    flex-shrink: 0;
                    width: 97px;
                    height: 97px;
                    background-color: #001024;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 2rem;

                    margin-right: 50px;
                  }

                  .text-01 {
                    font-size: 2rem;
                  }
                }
              }
            }
            .content-03 {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 50px;
              .price-chart-box {
                position: relative;
                width: 1066px;
                height: 1017px;
                margin: 50px 0;
              }
            }
            .content-04 {
              display: flex;
              flex-direction: column;
              align-items: center;

              .title {
                font-size: 4rem;
                color: #6db9ff;
                margin-bottom: 50px;
              }
              .text-01 {
                font-size: 2rem;
              }

              .arrow-box {
                display: flex;
                .arrow-image-box {
                  position: relative;
                  width: 60px;
                  height: 95px;
                }

                .arrow-01 {
                  right: 150px;
                }
                .arrow-02 {
                  left: 150px;
                }
              }

              .button-box {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .btn {
                  color: white;
                  background-color: #001024;
                  padding: 10px 20px;
                  font-size: 2rem;
                  border-radius: 50px;
                  margin: 0 30px;
                  transition-duration: 0.5s;
                }
                .btn:hover {
                  background-color: #2a507f;
                }
              }
            }
          }
          @media (max-width: 1200px) {
            .selling {
              .content-02 {
                width: 100%;
                .step-box {
                  width: 90%;
                }
              }

              .content-03 {
                .price-chart-box {
                  width: calc(1066px * 750 / 1066);
                  height: calc(1017px * 750 / 1066);
                }
              }
            }
          }
          @media (max-width: 768px) {
            .selling {
              .content-01 {
                .title {
                  text-align: center;
                }
                .text-01 {
                  text-align: center;
                }
                .sell-image-box {
                  width: 350px !important;
                  height: 350px !important;
                }
              }
              .content-02 {
                width: 100%;
                .step-box {
                  width: 90%;
                  .step-item {
                    flex-direction: column;
                    .numbering {
                      width: 50px;
                      height: 50px;
                      margin: 0;
                      margin-bottom: 10px;
                    }
                    .text-01 {
                      text-align: center;
                    }
                  }
                }
              }

              .content-03 {
                .price-chart-box {
                  width: calc(1066px * 350 / 1066);
                  height: calc(1017px * 350 / 1066);
                }
              }
              .content-04 {
                .title {
                  text-align: center;
                  font-size: 3rem;
                }
                .arrow-box {
                  margin: 20px 0;
                  .arrow-01 {
                    right: 50px;
                  }
                  .arrow-02 {
                    left: 50px;
                  }
                }
                .button-box {
                  .btn {
                    font-size: 1.5rem;
                    margin: 0 10px;
                  }
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
