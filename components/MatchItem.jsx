import Image from "next/image";

export default function MatchItem({ itemInfo }) {
  const matchPercent = Math.floor((itemInfo.cnt / 6) * 100);
  let textColor = "match-percent";
  if (matchPercent < 50) textColor = "match-percent yellow";
  if (matchPercent < 30) textColor = "match-percent red";
  return (
    <div className="match-item">
      <span className={textColor}>{matchPercent}% Match</span>
      <div className="hidden-box"></div>
      <div className="info-box">
        <div className="item-box">
          <div className="wrap">
            <div className="image-box" style={{ width: 56, height: 56 }}>
              <Image src={"/images/location.png"} fill alt="icon" />
            </div>
          </div>
          <span className="text-01">Location: {itemInfo?.location}</span>
        </div>
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
            <div className="image-box" style={{ width: 33, height: 33 }}>
              <Image src={"/images/clock.png"} fill alt="icon" />
            </div>
          </div>
          <span className="text-01">Age: {itemInfo?.age}</span>
        </div>
        <div className="item-box">
          <div className="wrap">
            <div className="image-box" style={{ width: 65, height: 75 }}>
              <Image src={"/images/hand.png"} fill alt="icon" />
            </div>
          </div>
          <span className="text-01 net-profit">
            Net Profit: {itemInfo?.budget}
          </span>
        </div>
      </div>
      <style jsx>{`
        .match-item {
          width: 348px;
          height: 330px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #001024;
          color: white;
          padding: 10px 10px;
          border-radius: 20px;
          margin: 10px 10px;
          font-size: 1.2rem;
          position: relative;

          .match-percent {
            width: 90%;
            background-color: #dcfce7;
            color: black;
            border-radius: 50px;
            padding: 10px 5px;
            text-align: center;
            font-weight: bold;
          }
          .yellow {
            background-color: #fef9c3;
          }
          .red {
            background-color: #fee2e2;
          }

          .info-box {
            align-self: start;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            .item-box {
              display: flex;
              align-items: center;
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
        @media (max-width: 728px) {
          .match-item {
            width: calc(348px * 9 / 10);
            height: calc(330px * 9 / 10);
            .info-box {
              .item-box {
                .wrap {
                  width: 56px;
                  height: 56px;
                  .image-box {
                    transform: scale(0.8);
                  }
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
