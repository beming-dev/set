import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const toolkitItem = [
    "Reassurance",
    "Step by step guide",
    "Search engine",
    "Valuation",
    "Newsletter",
    "Data drive",
    "Template transaction documentation",
    "Specialist in your area",
  ];
  const cofounder = [
    {
      name: "Simone",
      image: "/images/simone.png",
    },
    {
      name: "Jason",
      image: "/images/jason.png",
    },
    {
      name: "Coner",
      image: "/images/coner.png",
    },
    {
      name: "Mingwan",
      image: "/images/mingwan.png",
    },
  ];

  const others = [
    {
      name: "FATIMA BWORN",
      image: "/images/fatima.png",
      description:
        "“I had a small restaurant that I did not have the time to run anymore. I have to say I am impressed with the experience.”",
    },
    {
      name: "JEREMY OTTO",
      image: "/images/jeremy.png",
      description:
        "“Raising a company is not easy. Selling it even less. SET really did make me feel delighted and reassured with my transition”",
    },
    {
      name: "OLIVIA COLE",
      image: "/images/olivia.png",
      description:
        "“I had a great experience with SET. I was able to find the exact investment I looking for” ",
    },
  ];

  const FAQs = [
    {
      qustion: "What services does the firm provide?",
      description:
        "Our firm specializes in leveraging advanced artificial intelligence technologies to offer a comprehensive suite of merger and acquisition advisory services. These services include but are not limited to, target identification through AI-driven analytics, valuation modelling using machine learning algorithms. By integrating AI into our core operations, we aim to enhance the efficiency, accuracy, and strategic value of our matching service, enabling our clients to make data-informed decisions throughout the M&A process.",
    },
    {
      qustion: "How does AI technology improve the M&A process?",
      description:
        "Artificial intelligence significantly improves the M&A process by automating and optimizing several key aspects. Firstly, AI algorithms can analyse vast datasets to identify potential acquisition targets or buyers much more rapidly than traditional methods, thus saving time and resources. Secondly, machine learning models are utilized to conduct analysis on potential successors/ buyers by swiftly sifting through financial documents, and other pertinent data to uncover risks and opportunities. Furthermore, AI-driven valuation models enable more accurate and dynamic assessment of a target company's worth by factoring in a wider range of variables, including market trends and predictive financial performance. Lastly, AI can assist in the negotiation phase by simulating various scenarios and outcomes, helping parties to strategize effectively. These enhancements collectively contribute to a more informed, efficient, and strategic M&A matching process.",
    },
    {
      qustion: "Can AI replace human advisors in the M&A process?",
      description:
        "While AI brings significant advancements in processing data and generating insights, it complements rather than replaces the critical role of human advisors in the M&A process. Human expertise is indispensable for interpreting AI-generated data, understanding the nuanced strategic implications, and making judgment-based decisions that require emotional intelligence, such as negotiating deal terms and managing stakeholder relationships. Our approach integrates AI as a powerful tool to augment the expertise of our advisors, ensuring that clients receive a blend of cutting-edge technology and seasoned professional judgment through alliances we have forged with accounting and legal firms.",
    },
    {
      qustion:
        "What measures are in place to ensure data security and confidentiality?",
      description:
        "Recognising the paramount importance of data security and confidentiality in M&A transactions, our firm implements careful security protocols and leverages encryption technologies to protect all client data. AI systems are designed with built-in security features, including access controls, audit trails, and anomaly detection algorithms, to prevent unauthorized access and data breaches. Additionally, we adhere to international data protection regulations (GDPR) and industry best practices, ensuring that all client information is handled with the utmost discretion and integrity throughout the M&A process.",
    },
    {
      qustion:
        "How does the firm stay updated with the latest AI advancements?",
      description:
        "Our firm is committed to staying at the forefront of AI technology in the M&A sector. We maintain dedicated to research and AI training that focuses on exploring and integrating the latest AI advancements into our services. This includes continuous training for our staff on new AI tools and methodologies, partnerships with academic institutions, and active participation in industry forums and conferences. By keeping level with emerging trends and innovations in AI, we ensure that our clients benefit from the most advanced and effective tools available for their M&A activities.",
    },
    {
      qustion:
        "How does the AI platform enhance target screening and selection?",
      description:
        "The AI platform enhances target screening and selection by employing advanced algorithms to analyse market data, financial performances, and industry trends, thereby identifying potential targets that align with the strategic objectives of our clients. The AI-driven approach allows for the processing of vast amounts of information, including unstructured data such as news articles and social media, enabling a more comprehensive and nuanced analysis. This results in a highly curated list of targets, optimized for potential synergies, financial health, and strategic fit, thus improving the likelihood of successful acquisitions.",
    },
    {
      qustion: "Can the AI platform predict the success of an M&A deal?",
      description:
        "The AI platform employs predictive analytics and machine learning models to assess the potential success of an M&A deal by analysing historical deal data, industry trends, and financial performance indicators. While no prediction is infallible, the platform can provide a probability score indicating the likelihood of achieving the desired outcomes, such as synergies realization, financial performance improvements, and strategic alignment. These predictions help clients make informed decisions by highlighting potential challenges and opportunities, although they are complemented by human expertise to consider qualitative factors and strategic implications.",
    },
  ];

  const [activeItems, setActiveItems] = useState(-1);
  const [question, setQuestion] = useState("");

  const handleClick = (index) => {
    if (index == activeItems) {
      setActiveItems(() => -1);
    } else {
      setActiveItems(index);
    }
  };

  const router = useRouter();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { q: question },
    });
  };
  const onQChange = (e) => {
    setQuestion(e.target.value);
  };
  return (
    <div className="home">
      <div className="image-01 image">
        <Image src={"/images/home01.png"} alt="a" fill />
      </div>
      <div className="image-02 image">
        <Image src={"/images/home02.png"} alt="a" fill />
      </div>
      <div className="content-01 content">
        <div className="image-03 image">
          <Image src={"/images/home03.png"} alt="a" fill />
        </div>
        <div className="home-content">
          <div className="home-logo">
            <Image src={"/images/home-logo.png"} alt="logo" fill />
          </div>
          <span className="text-01">Silver Era Transition</span>
          <span className="text-02">
            The European crossroad for <u> generational transitions</u>
          </span>
          <form className="input-box" onSubmit={onSearchSubmit}>
            <input
              className="search-input"
              type="text"
              placeholder="Describe what you are looking for..."
              onChange={onQChange}
            />
            <button type="submit" className="send-image-box">
              <Image
                alt="submit"
                src={"/images/send.png"}
                width={50}
                height={50}
              />
            </button>
          </form>
        </div>
      </div>
      <div className="bottom-bar">
        <span className="bottom-text">Large Selection</span>
        <span className="bottom-text">Connecting Platform</span>
        <span className="bottom-text">Group of Advisors</span>
      </div>
      <div className="content-02 content">
        <span className="text-01">
          We create meaningful connections between ageing business
          <br /> owners and potential successors
        </span>
        <div className="want-box">
          <span className="text-02">I want to</span>
          <div className="want-item-box">
            <div
              className="want-item"
              onClick={() => {
                router.push("/selling");
              }}
            >
              Sell a company
            </div>
            <div
              className="want-item"
              onClick={() => {
                router.push("/buying");
              }}
            >
              Buy a company
            </div>
            <div className="want-item">Find an advisor</div>
          </div>
        </div>
      </div>
      <div className="content-03 content">
        <span className="title">What do we do?</span>
        <div className="what-box">
          <p className="txt-box">
            We create meaningful connections between ageing business owners and
            potential successors <br />
            <br /> We understand that for many elderly entrepreneurs, the most
            important factor isn't just selling their business, but ensuring it
            thrives under new leadership. <br />
            <br /> At the same time, younger generations are exposed to the
            shiny new ventures. There's no need to start from scratch when you
            can step into a well-established and smoothly operating enterprise.
          </p>
          <div className="image-box">
            <Image src="/images/what.png" alt="what" fill />
          </div>
        </div>
      </div>
      <div className="content-04 content">
        <span className="title">Our focus</span>
        <div className="focus-box">
          <div className="focus-image-box">
            <Image src="/images/focus.png" alt="focus" fill />
          </div>
          <p className="p">
            The process of buying and selling a business is a difficult and
            lengthy one. <br />
            <br /> We establish the right foundations for your successful
            transition: meeting the right person and conducting your research
            with advisors. All in a speedy timeframe. <br />
            <br />
            Why do we focus here? Because Europe's is an ageing continent.
            Therefore our approach isn't just innovative; it's necessary.
          </p>
        </div>
      </div>
      <div className="content-05 content">
        <span className="title">Why us?</span>
        <ol className="ol">
          <li>
            <b>Innovative Matching Technology:</b> Utilizes advanced AI
            algorithms for precise and intelligent matchmaking.
          </li>
          <br />
          <li>
            <b>Focus on Legacy:</b> Emphasizes preserving the business's legacy,
            not just facilitating transactions.
          </li>
          <br />
          <li>
            <b>User-Friendly Interface:</b> Offers a streamlined,
            easy-to-navigate platform with interactive tools.
          </li>
        </ol>
        <div className="image-box">
          <Image src="/images/why.png" alt="why" fill />
        </div>
        <span className="text-01">
          Just in the Netherlands, 10,000 companies are sold in the every year.
          40,000 other entrepreneurs close their doors without selling. Research
          in collaboration with the Chamber of Commerce shows that half of these
          (20,000 companies) could have been sold.
          <br />
          <br /> Given the approximate 50,000 buyers, this means 2.5 buyers per
          seller, a change to not underestimate.
        </span>
      </div>
      <div className="content-06 content">
        <span className="title">Toolkit</span>
        <div className="toolkit-box">
          {toolkitItem.map((text, i) => (
            <div className="toolkit-item" key={i}>
              <span className="toolkit-text">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="content-07 content" id="meet">
        <span className="title">Meet the Team</span>
        <div className="meet-content">
          {cofounder.map((member, i) => (
            <div className="member-box" key={i}>
              <div className="image-box">
                <Image src={member.image} alt="profile" fill />
              </div>
              <span>Co-Founder</span>
            </div>
          ))}
        </div>
      </div>
      <div className="content-08 content">
        <span className="title">
          Read what <u>others</u> have to say
        </span>
        <div className="others-box">
          {others.map((personInfo, i) => (
            <div className="other-profile" key={i}>
              <div className="image-box">
                <Image src={personInfo.image} fill alt="profile" />
              </div>
              <span className="text-01">{personInfo.name}</span>
              <span className="text-02">{personInfo.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="content-09 content">
        <span className="text-01">interested?</span>
        <span className="text-02">Take part of the transition</span>
        <button className="start-btn">Get Started</button>
      </div>
      <div className="content-10 content">
        <span className="title">FAQs</span>
        <div className="image-box">
          <Image src="/images/faq.png" fill alt="faq" />
        </div>
        <div className="faq-box">
          {FAQs.map((faqContent, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={activeItems == index ? "faq-item active" : "faq-item"}
            >
              <div className="down-image-box">
                <Image src="/images/arrow-down.png" alt="down" fill />
              </div>
              <span className="text-01">
                {faqContent.qustion}
                <br />
                <div
                  className="description"
                  style={{
                    fontSize: "1.3rem",
                    lineHeight: "1.3rem",
                    margin: "10px 0",
                  }}
                >
                  {faqContent.description}
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .home {
          padding: 0 10%;
          width: 100vw;
          overflow-x: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          .title {
            color: #6db9ff;
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 50px;
          }

          .image-01 {
            position: absolute;
            width: 50%;
            height: 50%;
            top: 24px;
            left: 0;
            z-index: -1;
          }
          .image-02 {
            position: absolute;
            right: 0;
            width: 40%;
            height: 80%;
            bottom: -200px;
            right: 0;
          }
          .content {
            margin-bottom: 100px;
          }
          .content-01 {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative !important;
            width: 100%;
            height: calc(100vh - 182px);
            margin-bottom: 0;
            .image {
              position: absolute;
            }
            .image-03 {
              poaition: relative;
              z-index: -1;
              top: 60%;
              width: 100vw;
              height: 285px;
            }

            .home-content {
              width: 90%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              .home-logo {
                width: 456px;
                height: 243px;
                position: relative !important;
              }

              .text-01 {
                font-size: 3rem;
                font-weight: bold;
              }

              .text-02 {
                font-size: 2rem;
              }
            }
            .input-box {
              position: relative;
              width: 100%;
              .search-input {
                width: 100%;
                margin-top: 100px;
                border: 1px solid black;
                padding: 10px 20px;
                border-radius: 50px;
              }

              .send-image-box {
                width: 45px;
                height: 45px;
                position: absolute;
                bottom: 0px;
                right: 10px;
              }
            }
          }
          .bottom-bar {
            width: calc(100vw);
            height: 61px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            background-color: #001024;
            color: white;
            margin-bottom: 100px;
            .bottom-text {
              font-size: 1.5rem;
              font-weight: 100;
            }
          }
          .content-02 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            .text-01 {
              width: 100%;
              text-align: center;
              font-size: 1.5rem;
              margin-bottom: 50px;
            }

            .want-box {
              width: 60%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background: linear-gradient(
                274.79deg,
                #bac0cb 19.12%,
                #cbe6fe 88.74%
              );
              padding: 30px 0;
              border-radius: 10px;

              .text-02 {
                font-weight: bold;
                font-size: 2.5rem;
              }
              .want-item-box {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                margin-top: 40px;
                .want-item {
                  color: white;
                  font-size: 1.8rem;
                  background-color: #001024;
                  padding: 20px 50px;
                  border-radius: 70px;
                  text-align: center;
                  transition-duration: 0.5s;
                  font-weight: bold;
                  margin: 10px 0;
                }
                .want-item:hover {
                  color: #001024;
                  background-color: white;
                }
              }
            }
          }
          /* Rectangle 179 */

          .content-03 {
            display: flex;
            flex-direction: column;
            margin: 50px 0;
            .title {
              margin-bottom: 0;
            }
            .txt-box {
              height: 390px;
              display: flex;
              align-items: center;
            }

            .what-box {
              position: relative;
              display: flex;
              height: 525px;
              justify-content: space-between;
              align-items: center;
              .txt-box {
                font-weight: 500;
                width: 50%;
              }
              .image-box {
                position: relative;
                width: 525px;
                height: 525px;
              }
            }
          }

          .content-04 {
            display: flex;
            flex-direction: column;

            .focus-box {
              position: relative;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 495px;
              .p {
                font-weight: 500;
                width: 50%;
              }
              .focus-image-box {
                position: relative;
                width: 495px;
                height: 495px;
              }
            }
          }

          .content-05 {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            .title {
              text-align: center;
            }
            .image-box {
              position: relative !important;
              width: 837px;
              height: 429px;
              margin-top: 100px;
              margin-bottom: 50px;
            }

            .ol {
              width: 70%;
              font-size: 1.5rem;
              list-style-type: decimal;
            }

            .text-01 {
              font-size: 1.2rem;
            }
          }

          .content-06 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .toolkit-box {
              width: 1080px;
              height: auto;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              .toolkit-item {
                width: 255px;
                height: 255px;
                background-color: #001024;
                color: white;
                font-size: 1.5rem;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 5px 5px;
                text-align: center;
                transition-duration: 0.5s;
              }
              .toolkit-item:hover {
                background-color: #2a507f;
              }
            }
          }

          .content-07 {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            .title {
              color: black;
            }
            .meet-content {
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              width: 100%;
              background-color: #aad6ff;
              border-radius: 10px;
              height: 318px;

              .member-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                .image-box {
                  position: relative !important;
                  width: 136px;
                  height: 136px;
                  margin-bottom: 30px;
                }
              }
            }
          }

          .content-08 {
            display: flex;
            flex-direction: column;
            align-itmes: center;

            .title {
              text-align: center;
              color: black;
              font-weight: 300;
              margin-bottom: 150px;
            }

            .others-box {
              display: flex;

              .other-profile {
                position: relative !important;
                display: flex;
                flex-direction: column;
                background-color: #a1a9b8;
                border-radius: 10px;
                margin: 0 10px;
                width: 345px;
                height: 383px;
                align-items: center;
                padding: 0 30px;

                .image-box {
                  width: 136px;
                  height: 136px;
                  position: relative !important;
                  top: -68px;
                }

                .text-01 {
                  font-weight: bold;
                  font-size: 2rem;
                  margin-bottom: 20px;
                }
                .text-02 {
                  font-size: 1.2rem;
                  text-align: center;
                }
              }
            }
          }

          .content-09 {
            width: 1065px;
            height: 499px;
            background: linear-gradient(
              274.79deg,
              #bac0cb 19.12%,
              #cbe6fe 88.74%
            );

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 30px 0;
            border-radius: 20px;

            .text-01 {
              font-size: 2rem;
            }
            .text-02 {
              font-size: 4rem;
              font-weight: bold;
            }
            .start-btn {
              width: 354px;
              height: 129px;
              background-color: #001024;
              color: white;
              border-radius: 100px;
              font-size: 3rem;
              transition-duration: 0.5s;
              font-weight: bold;
            }
            .start-btn:hover {
              background-color: white;
              color: #001024;
            }
            .text-03 {
              font-size: 2rem;
            }
          }

          .content-10 {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            .title {
              color: black;
              margin: 0;
            }
            .image-box {
              position: relative !important;
              width: 522px;
              height: 522px;
            }

            .faq-box {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              .faq-item {
                width: 90%;
                height: 59px;
                overflow-y: hidden;
                background-color: #001024;
                border-radius: 15px;
                color: white;
                padding: 5px 10px;
                margin: 3px 0;
                display: flex;
                font-size: 2rem;
                cursor: pointer;
                .down-image-box {
                  position: relative !important;
                  width: 26px;
                  height: 18px;
                  margin-right: 30px;
                  align-self: center;
                }
                .text-01 {
                  flex: 1;
                }
                transition-duration: 1s;
              }
              .active {
                background-color: #315151;
                height: fit-content;
                color: white;
              }
            }
          }
        }
        @media (max-width: 1200px) {
          .home {
            padding: 0;

            .content-02 {
              .want-box {
                width: 60%;
              }
            }
            .content-03 {
              .what-box {
                .image-box {
                  width: 400px;
                  height: 400px;
                }
              }
            }
            .content-04 {
              .focus-box {
                .focus-image-box {
                  width: 400px;
                  height: 400px;
                }
              }
            }

            .content-05 {
              .image-box {
                position: relative;
                width: calc(837px * 3 / 5);
                height: calc(429px * 3 / 5);
              }
              .text-01 {
                width: 90%;
              }
            }

            .content-06 {
              .toolkit-box {
                width: 90%;
                .toolkit-item {
                  width: 170px;
                  height: 170px;
                }
              }
            }

            .content-07 {
              .meet-content {
                width: 80%;
              }
            }

            .content-08 {
              .others-box {
                .other-profile {
                  width: calc(345px * 7 / 10);
                  height: calc(383px * 4 / 5);
                  padding: 0 10px;
                  .text-01 {
                    margin-top: -20px;
                  }
                  .image-box {
                    width: 100px;
                    height: 100px;
                    top: -50px;
                  }
                }
              }
            }

            .content-09 {
              width: 90%;
              height: 430px;

              .start-btn {
                width: calc(354px * 4 / 5);
                height: calc(129px * 4 / 5);
              }
            }
          }
        }
        @media (max-width: 768px) {
          .home {
            .image-02 {
              position: absolute;
              right: 0;
              width: 40%;
              height: 70%;
              bottom: -150px;
              right: 0;
            }

            .content {
              width: 360px;
            }

            .content-01 {
              .image-03 {
                poaition: relative;
                z-index: -1;
                top: 55%;
                width: 100vw;
                height: 100px;
              }
              .home-content {
                width: 100%;
                align-items: center;
                justify-content: center;

                .home-logo {
                  width: calc(456px * 2 / 5);
                  height: calc(243px * 2 / 5);
                }
                .text-01 {
                  text-align: center;
                }
                .text-02 {
                  text-align: center;
                }

                .input-box {
                  .search-input {
                    margin-top: 50px;
                  }
                  .send-image-box {
                    width: 35px;
                    height: 35px;
                    bottom: 3px;
                  }
                }
              }
            }
            .bottom-bar {
              .bottom-text {
                font-size: 1rem;
              }
            }
            .content-02 {
              .want-box {
                width: 100%;
              }
            }
            .content-03 {
              .title {
                text-align: center;
              }
              .what-box {
                height: auto;
                width: 100%;
                flex-direction: column;

                .image-box {
                  width: 350px;
                  height: 350px;
                }
                .txt-box {
                  width: 100%;
                }
              }
            }
            .content-04 {
              .title {
                text-align: center;
              }
              .focus-box {
                flex-direction: column;
                height: auto;

                .focus-image-box {
                  top: 0;
                  max-width: 350px;
                  max-height: 350px;
                  margin-bottom: 50px;
                }

                .p {
                  width: 100%;
                }
              }
            }

            .content-05 {
              .image-box {
                position: relative !important;
                width: calc(837px * 350 / 837);
                height: calc(429px * 350 / 837);
              }
              .text-01 {
                width: 90%;
              }
              .ol {
                width: 90%;
              }
            }

            .content-06 {
              .toolkit-box {
                width: 90%;
                .toolkit-item {
                  width: 130px;
                  height: 130px;
                }
              }
            }

            .content-07 {
              .meet-content {
                width: 100%;
                height: 250px;
                .member-box {
                  .image-box {
                    width: 80px;
                    height: 80px;
                  }
                }
              }
            }

            .content-08 {
              .title {
                margin-bottom: 100px;
              }
              .others-box {
                flex-direction: column;
                .other-profile {
                  width: 95%;
                  height: 250px;
                  padding: 0 10px;
                  margin-bottom: 70px;
                  .text-01 {
                    margin-top: -20px;
                  }
                  .image-box {
                    width: 100px;
                    height: 100px;
                    top: -50px;
                  }
                }
              }
            }

            .content-09 {
              width: 90%;
              height: 430px;

              .text-02 {
                font-size: 3rem;
                text-align: center;
              }
              .start-btn {
                font-size: 2.5rem;
                width: calc(354px * 6 / 10);
                height: calc(129px * 6 / 10);
              }
            }
            .content-10 {
              .image-box {
                width: 350px;
                height: 350px;
              }
              .faq-box {
                .faq-item {
                  height: 45px;
                }
                .active {
                  height: fit-content;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
