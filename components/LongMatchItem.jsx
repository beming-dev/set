import Image from "next/image";
import { useRouter } from "next/router";

export default function LongMatchItem({ itemInfo }) {
  const matchPercent = Math.floor((itemInfo.cnt / 6) * 100);
  let textColor = "match-percent";
  if (matchPercent < 50) textColor = "match-percent yellow";
  if (matchPercent < 30) textColor = "match-percent red";

  const router = useRouter();

  const onViewClick = () => {
    router.push("/login");
  };
  return (
    <div className="long-match-item">
      <div className="top">
        <span className={textColor}>{matchPercent}% Match</span>
        <button className="view-btn" onClick={onViewClick}>
          View Business
        </button>
      </div>
      <div className="information">
        <div className="up">
          <div className="item-box">
            <div className="wrap">
              <div className="image-box" style={{ width: 56, height: 50 }}>
                <Image src={"/images/location.png"} fill alt="icon" />
              </div>
            </div>
            <span className="text-01">Location: {itemInfo?.location}</span>
          </div>
          <div className="item-box">
            <div className="wrap">
              <div className="image-box" style={{ width: 33, height: 33 }}>
                <Image src={"/images/clock.png"} fill alt="icon" />
              </div>
            </div>
            <span className="text-01">Age: {itemInfo?.age}</span>
          </div>
          <div className="item-box">
            <div className="wrap">
              <div className="image-box" style={{ width: 25, height: 25 }}>
                <Image src={"/images/bookmark.png"} fill alt="icon" />
              </div>
            </div>
            <span className="text-01">Saved: 100</span>
          </div>
        </div>
        <div className="down">
          <div className="item-box">
            <div className="wrap">
              <div className="image-box" style={{ width: 35, height: 28 }}>
                <Image src={"/images/home.png"} fill alt="icon" />
              </div>
            </div>
            <span className="text-01">Type: {itemInfo?.industry}</span>
          </div>
          <div className="item-box">
            <div className="wrap">
              <div className="image-box" style={{ width: 65, height: 75 }}>
                <Image src={"/images/hand.png"} fill alt="icon" />
              </div>
            </div>
            <span className="text-01 net-profit">
              Net Profit: {itemInfo?.budget} p/m
            </span>
          </div>
          <div className="item-box">
            <div className="wrap">
              <div className="image-box" style={{ width: 37, height: 21 }}>
                <Image src={"/images/eye.png"} fill alt="icon" />
              </div>
            </div>
            <span className="text-01">Viewing: 12</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .long-match-item {
          width: 90vw;
          height: auto;
          background-color: #040722;
          color: white;
          padding: 20px 10px;
          margin: 10px 0;
          border-radius: 20px;
          font-size: 1.2rem;

          .top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .match-percent {
              padding: 13px 70px;
              background-color: #dcfce7;
              color: black;
              border-radius: 50px;
              font-weight: bold;
            }

            .yellow {
              background-color: #fef9c3;
            }
            .red {
              background-color: #fee2e2;
            }

            .view-btn {
              background-color: #6db9ff;
              color: black;
              padding: 10px 20px;
              border-radius: 50px;
              font-weight: bold;
            }
          }

          .information {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            padding: 0 10px;
            .up {
              display: flex;
            }
            .down {
              display: flex;
            }
            .item-box {
              display: flex;
              align-items: center;
              width: 30%;
              .wrap {
                width: 70px;
                height: 70px;
                display: flex;
                align-items: center;
                justify-content: center;
                .image-box {
                  position: relative;
                  margin-right: 20px;
                }
              }

              .net-profit {
                text-shadow: 0px 0px 8px white;
                color: transparent;
              }
            }
          }
        }
        @media (max-width: 768px) {
          .long-match-item {
            .top {
              .match-percent {
                padding: 10px 20px;
              }

              .yellow {
              }
              .red {
              }

              .view-btn {
                padding: 10px 20px;
              }
            }

            .information {
              display: flex;
              .up {
                display: flex;
                flex-direction: column;
              }
              .down {
                display: flex;
                flex-direction: column;
              }
              .item-box {
                width: 100%;
                .wrap {
                  .image-box {
                  }
                }

                .net-profit {
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
