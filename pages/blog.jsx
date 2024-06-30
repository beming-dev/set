import Image from "next/image";

export default function Blog() {
  const categories = [
    "5 Most common mistakes",
    "Step by step guide",
    "EU Countries",
    "Valuation",
    "Newsletter",
    "Market Trends",
    "Success Stories",
    "What to expect",
  ];
  const contents = [
    {
      title: "Recommended Podcasts",
      image: "/images/blog-01.png",
    },
    {
      title: "Recommended Videos",
      image: "/images/blog-02.png",
    },
    {
      title: "Success Stories",
      image: "/images/blog-03.png",
    },
  ];
  return (
    <div className="blog">
      <div className="content-01">
        <div className="top">
          <div className="left">
            <span className="text-01">
              Tips, advice and <br />
              insights about
              <br /> buying and selling
              <br /> businesses.
            </span>
            <span className="text-02">Find the ideal business quickly</span>
          </div>
          <div className="image-box">
            <Image src={"/images/blog-bg.png"} fill alt="bg" />
          </div>
        </div>
        <div className="bottom">
          <span className="text-01">
            Tell our AI assistant what you are looking for
          </span>
          <div className="input-box">
            <input
              type="text"
              className="input"
              placeholder="What is a NDA? / How do I ..."
            />
            <div className="send-box">
              <Image src="/images/send.png" fill alt="send" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-02">
        <span className="title">categories</span>
        <div className="category-box">
          {categories.map((category, i) => (
            <span key={i} className="category-item">
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="content-03">
        {contents.map((content, i) => (
          <div className="item" key={i}>
            <span className="text-01">{content.title}</span>
            <div className="image-box">
              <Image src={content.image} alt="content" fill />
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .blog {
            .content-01 {
              width: 100%;
              height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .top {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                .image-box {
                  position: relative;
                  width: 476px;
                  height: 476px;

                  align-self: start;
                }
                .left {
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 100px;
                  margin-right: 50px;
                  justify-content: center;
                  .text-01 {
                    font-size: 4rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                  }
                  .text-02 {
                    font-size: 2rem;
                  }
                }
              }
              .bottom {
                display: flex;
                flex-direction: column;
                align-self: center;
                width: 80%;
                position: relative;
                .input-box {
                  width: 100%;
                  height: 60px;
                  position: relative;
                  margin-top: 5px;
                  .send-box {
                    position: absolute;
                    right: 20px;
                    bottom: 5px;
                    width: 51px;
                    height: 51px;
                  }

                  .input {
                    width: 100%;
                    height: 100%;
                    background-color: #6db9ff;
                    border-radius: 50px;
                    padding: 0 50px;
                    border: none;
                    outline: none;
                  }
                  .input::placeholder {
                    color: #040722;
                    font-weight: 100;
                  }
                }
              }
            }
            .content-02 {
              display: flex;
              flex-direction: column;
              margin-bottom: 150px;

              align-items: center;
              .title {
                font-size: 4rem;
                font-weight: bold;
                margin-bottom: 100px;
              }

              .category-box {
                width: 1080px;
                display: flex;
                flex-wrap: wrap;
                .category-item {
                  width: 255px;
                  height: 255px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #001024;
                  color: white;
                  border-radius: 10px;
                  margin: 5px 5px;
                  font-size: 2rem;
                  text-align: center;
                  padding: 0 10px;
                  transition-duration: 0.5s;
                }

                .category-item:hover {
                  background-color: #2a507f;
                }
              }
            }
            .content-03 {
              display: flex;
              justify-content: center;
              .item {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 5px;

                .text-01 {
                  font-size: 2rem;
                  font-weight: 300;
                  width: 85%;
                  text-align: center;
                  height: 96px;
                }
                .image-box {
                  position: relative;
                  width: 347px;
                  height: 605px;
                }
              }
            }
          }
          @media (max-width: 1200px) {
            .blog {
              .content-01 {
                height: auto;
                margin-top: 50px;
                margin-bottom: 150px;
                .top {
                  .left {
                    .text-01 {
                      font-size: 3rem;
                    }
                  }
                  .image-box {
                    width: 350px;
                    height: 350px;
                  }
                }
                .bottom {
                  align-self: center;
                  width: 90%;
                }
              }

              .content-02 {
                .category-box {
                  width: 720px;
                  .category-item {
                    width: 170px;
                    height: 170px;
                  }
                }
              }

              .content-03 {
                .item {
                  .image-box {
                    width: calc(347px * 7 / 10);
                    height: calc(605px * 7 / 10);
                  }
                }
              }
            }
          }
          @media (max-width: 768px) {
            .blog {
              .content-01 {
                height: auto;
                margin-top: 50px;
                margin-bottom: 150px;
                .top {
                  .left {
                    .text-01 {
                      font-size: 3rem;
                    }
                  }
                  .image-box {
                    display: none;
                  }
                }
                .bottom {
                  align-self: center;
                  width: 90%;
                  .text-01 {
                    text-align: center;
                  }
                   {
                    /* .input-box {
                    position: relative;
                    .send-box {
                      position: relative;
                      width: 30px;
                      height: 30px;
                      bottom: 0;
                      right: 0;
                    }
                  } */
                  }
                }
              }

              .content-02 {
                .category-box {
                  width: 360px;
                  .category-item {
                    width: 170px;
                    height: 170px;
                  }
                }
              }

              .content-03 {
                flex-direction: column;
                .item {
                  .image-box {
                    width: calc(347px * 4 / 10);
                    height: calc(605px * 4 / 10);
                  }
                  .text-01 {
                    height: auto;
                    margin-top: 20px;
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
