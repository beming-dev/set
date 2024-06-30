import Image from "next/image";

export default function Blog() {
  const categories = [
    "5 Most common mistakes",
    "step by step guide",
    "EU Countries",
    "Valuation",
    "newsletter",
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
  const destep = [
    {
      title: "Demographic Factors:",
      description: `Population: Italy has an aging population with a high life expectancy, which affects labor market dynamics and consumer preferences.
        Urbanization: High urbanization rates, especially in northern regions, influence where businesses might be most successful.
        Migration: Ongoing immigration can affect labor markets and consumer demographics.`,
    },
    {
      title: "Economic Factors: ",
      description: `Economic Stability: Italy has experienced economic volatility, with periods of recession and slow growth. Investors should be aware of the economic cycles.
      Unemployment Rates: Varying unemployment rates, especially among young people, can impact labor markets.
      Currency and Inflation: As part of the Eurozone, Italy uses the euro, and monetary policy is set by the European Central Bank.
      Tourism: A significant contributor to the economy, especially in cultural, historical, and coastal areas.`,
    },
    {
      title: "Socio-Cultural Factors:",
      description: `Cultural Heritage: Italy's rich cultural heritage influences consumer preferences and business practices.
      Language: Italian is the primary language, and language barriers can impact business operations.
      Lifestyle: Varies regionally, with a general emphasis on quality of life, family, and leisure.
      Fashion and Design: Italy is a global leader in fashion and design, which can be a significant market sector.`,
    },
    {
      title: "Technological Factors:",
      description: `
      Digitalization: Italy is progressively embracing digital technologies, though there's variability in adoption rates between regions.
Innovation: Key sectors include automotive, machinery, robotics, and fashion, with growing investment in tech startups.
Infrastructure: Generally well-developed, though there are regional disparities.`,
    },
    {
      title: "Ecological Factors:",
      description: `Environmental Policies: Italy is committed to EU environmental standards and is actively investing in sustainable practices.
Climate Change: Impacts, especially in coastal and agricultural sectors, are increasingly relevant.
Energy Dependency: Reliance on energy imports affects energy policies and business costs.`,
    },
    {
      title: "Political Factors:",
      description: `
      Government Stability: Italy has seen frequent political changes and coalition governments, which can affect policy continuity.
EU Membership: As a EU member, Italy is subject to EU regulations and policies, affecting trade, labor, and legal frameworks.
Regulatory Environment: Known for complex bureaucracy and regulatory hurdles, which can impact business setup and operations.
Taxation: Italy has a comprehensive tax system with various implications for businesses.`,
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
          <span className="text-03">
            Tell our AI assistant what you are looking for
          </span>
          <div className="input-box">
            <input
              className="input"
              type="text"
              placeholder="What is a NDA? / How do I ..."
            />
            <div className="send-box">
              <Image src="/images/send.png" fill alt="send" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-04"></div>
      <div className="content-05">
        {destep.map((step, i) => (
          <div className="step-box" key={i}>
            <span className="text-01">{step.title}</span>
            <span className="text-02">{step.description}</span>
          </div>
        ))}
      </div>
      <div className="content-02">
        <span className="title">categories</span>
        <div className="category-box">
          {categories.map((category, i) => (
            <span className="category-item" key={i}>
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
                  position: relative !important;
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
                align-self: start;
                width: 100%;
                position: relative !important;

                .text-03 {
                  font-size: 1.3rem;
                  margin-bottom: 20px;
                }
                .input-box {
                  width: 100%;
                  height: 60px;

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

                  .send-box {
                    position: absolute;
                    right: 20px;
                    top: 55px;
                    width: 51px;
                    height: 51px;
                  }
                }
              }
            }
            .content-02 {
              display: flex;
              flex-direction: column;
              margin: 150px 0;

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
                  position: relative !important;
                  width: 347px;
                  height: 605px;
                }
              }
            }

            .content-05 {
              display: flex;
              flex-direction: column;
              .step-box {
                display: flex;
                flex-direction: column;

                .text-01 {
                  margin: 50px 0;
                  font-weight: bold;
                  font-size: 1.2rem;
                }
                .text-02 {
                  font-size: 1.2rem;
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

              .content-05 {
                padding: 0 10px;
                .text-01 {
                  text-align: center;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
