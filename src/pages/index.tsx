import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <div className="home">
      <button className="fix-btn">
        <Link href="/buyer">Buyer Enroll</Link>
      </button>
      <section className="section-01">
        <div className="left">
          <h1 className="txt-01">
            The European Crossed for
            <br />
            <span className="effect">Generational Transitions</span>
          </h1>
          <h2 className="txt-02">
            Silver Era Transition bridges generations, ensuring the continuity
            and growth of businesses. Designed for sellers, buyer and brokers.
            <span className="web">
              We streamline the process by identify ideal opportunities,
              ensuring a seamless and successful transition.
            </span>
          </h2>

          <div className="btn-box">
            <button className="start-btn btn">Get Started</button>
            <button className="book-btn btn">Book a Demo</button>
          </div>
        </div>
        <div className="right">
          <div className="image-box">
            <Image src={"/images/index-section-01.png"} alt="nomean" fill />
          </div>
        </div>
      </section>
      <section className="divider">
        <div className="image-box">
          <Image src={"/images/partners.png"} fill alt="fasdgs" />
        </div>
      </section>

      <section className="section-02">
        <div className="left center">
          <h1 className="title">The old way</h1>
          <div className="bottom">
            <div className="txt-box">
              <h2>Countless Hours on Research</h2>
              <span>
                Manually compiling lists of potential buyers or sellers, taking
                days or even weeks.
              </span>
              <h2>Inconsistent and Incomplete Data</h2>
              <span>
                Relying on outdated databases and fragmented information
                sources.
              </span>
              <h2>Complex Coordination</h2>
              <span>
                Juggling multiple communication channels and scheduling
                conflicts.
              </span>
            </div>
            <div className="image-box">
              <Image src={"/images/index-section-021.png"} fill alt="fasdgs" />
            </div>
          </div>
        </div>
        <div className="right center">
          <h1 className="title">The SET way</h1>
          <div className="easier-image">
            <Image src={"/images/easier.png"} fill alt="fasdgs" />
          </div>
          <div className="bottom">
            <div className="image-box">
              <Image src={"/images/index-section-022.png"} fill alt="fasdgs" />
            </div>
            <div className="txt-box">
              <h2>Fast matchmaking</h2>
              <span>
                Quickly connect with potential buyers or sellers using advanced
                algorithms, saving you time and effort.
              </span>
              <h2>Centralised deal data</h2>
              <span>
                Access up-to-date, complete deal information in one central
                location, eliminating confusion and errors.
              </span>
              <h2>Unified communication</h2>
              <span>
                Streamline your communications with an integrated platform,
                avoiding the chaos of multiple channels.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-03">
        <span className="title">How does it work?</span>
        <div className="arrow-image-box">
          <Image src="/images/bottom-arrow.png" fill alt="fasdgs" />
        </div>
        <h1>Jumpstarting the journey</h1>
        <div className="image-box-1">
          <Image src="/images/index-section-03.png" fill alt="fasdgs" />
        </div>

        <div className="image-box-2">
          <Image src="/images/index-section-03-1.png" fill alt="fasdgs" />
        </div>

        <div className="detail">
          <div className="item-box">
            <div className="icon-image-box">
              <Image src="/images/index-icon-01.png" fill alt="fasdgs" />
            </div>
            <span className="txt-01">Aggregating & standardizing data</span>
            <span className="txt-02">
              We collect and streamline all necessary data, wishes and wants
              with out data pipeline.
            </span>
            <span className="txt-03">
              <u style={{ color: "#365154" }}>Learn more</u>
            </span>
          </div>
          <div className="item-box">
            <div className="icon-image-box">
              <Image src="/images/index-icon-02.png" fill alt="fasdgs" />
            </div>
            <span className="txt-01">Sourcing targets</span>
            <span className="txt-02">
              We immediately are able to provide the best matches from our
              database. Further personalised research can be carried out.{" "}
            </span>
            <u style={{ color: "#365154" }}>Learn more</u>
          </div>
          <div className="item-box">
            <div className="icon-image-box">
              <Image src="/images/index-icon-03.png" fill alt="fasdgs" />
            </div>
            <span className="txt-01">Selecting & contacting matches</span>
            <span className="txt-02">
              Given the interests, initial contacts are made and disclosure is
              controlled. Once a match, a broker continues the process.{" "}
            </span>
            <u style={{ color: "#365154" }}>Learn more</u>
          </div>
        </div>
      </section>
      <section className="section-05">
        <div className="left">
          <div className="image-box">
            <Image src="/images/index-section-05.png" fill alt="fasdgs" />
          </div>
        </div>
        <div className="right">
          <div className="title-box">
            <h1 className="title">Find the right match</h1>
            <div className="line-image-box">
              <Image
                src="/images/index-section-05-line.png"
                fill
                alt="fasdgs"
              />
            </div>
          </div>
          <div className="image-box-mobile">
            <Image src="/images/index-section-05.png" fill alt="fasdgs" />
          </div>
          <span className="txt-01">
            Our advanced algorithms and comprehensive data analysis ensure you
            find the perfect match for your business needs. Input your criteria,
            and let our system do the rest. Get tailored recommendations that
            align with your goals and maximize your opportunities for success.
          </span>
          <div className="txt-02-box">
            <div className="check-image-box">
              <Image
                src="/images/check.png"
                width={100}
                height={100}
                alt="fasdgs"
              />
            </div>
            <span className="txt-02">
              <b>Precision</b>: Advanced algorithms provide highly accurate
              match suggestions based on your specific criteria.
            </span>
          </div>
          <div className="txt-02-box">
            <div className="check-image-box">
              <Image
                src="/images/check.png"
                width={100}
                height={100}
                alt="fasdgs"
              />
            </div>
            <span className="txt-02">
              <b>Customization</b>: Tailor your search and receive
              recommendations that fit your unique needs.
            </span>
          </div>
          <div className="txt-02-box">
            <div className="check-image-box">
              <Image
                src="/images/check.png"
                width={100}
                height={100}
                alt="fasdgs"
              />
            </div>
            <span className="txt-02">
              <b>Opportunity Maximization</b>: Discover opportunities you might
              have missed with manual searches.
            </span>
          </div>
          <button className="discover-btn">Discover all features</button>
        </div>
      </section>

      <section className="section-06">
        <div className="right">
          <div className="title-box">
            <h1 className="title">Streamline your process</h1>
            <div className="line-image-box">
              <Image
                src="/images/index-section-05-line.png"
                fill
                alt="fasdgs"
              />
            </div>
          </div>
          <div className="image-box-mobile">
            <Image src="/images/index-section-06.png" fill alt="fasdgs" />
          </div>
          <span className="txt-01">
            Our advanced algorithms and comprehensive data analysis ensure you
            find the perfect match for your business needs. Input your criteria,
            and let our system do the rest. Get tailored recommendations that
            align with your goals and maximize your opportunities for success.
          </span>
          <div className="txt-02-box">
            <div className="check-image-box">
              <Image
                src="/images/check.png"
                width={100}
                height={100}
                alt="fasdgs"
              />
            </div>
            <span className="txt-02">
              <b>Efficiency</b>: Save time with automated processes and
              centralized data management.
            </span>
          </div>
          <div className="txt-02-box">
            <div className="check-image-box">
              <Image
                src="/images/check.png"
                width={100}
                height={100}
                alt="fasdgs"
              />
            </div>
            <span className="txt-02">
              <b>Clarity</b>: Access all necessary information in one place,
              eliminating confusion and errors.
            </span>
          </div>
          <div className="txt-02-box">
            <div className="check-image-box">
              <Image
                src="/images/check.png"
                width={100}
                height={100}
                alt="fasdgs"
              />
            </div>
            <span className="txt-02">
              <b>Focus</b>: Concentrate on strategic decisions rather than
              administrative tasks.
            </span>
          </div>
          <button className="discover-btn">Discover all features</button>
        </div>
        <div className="left">
          <div className="image-box">
            <Image src="/images/index-section-06.png" fill alt="fasdgs" />
          </div>
        </div>
      </section>
      {/* <section className="section-07">
        <h1 className="title">New Articles and Knowledge</h1>
        <span className="txt-01">
          Stay updated with the latest insights and advancements in data-driven
          horticulture. Our articles provide valuable knowledge to help you
          enhance your greenhouse management skills.
        </span>
        <div className="article-box">
          <div className="article-item">
            <div className="image-box">
              <Image src="/images/index-section-07.png" fill alt="fasdgs" />
            </div>
            <span className="date">10 October 2024</span>
            <span className="article-title">
              The Rise of Data in Horticulture
            </span>
            <span className="description">
              horticulture industry. Learn about the latest trends and
              technologies that are revolutionizing plant growth and greenhouse
              operations.
            </span>
            <span className="readmore">
              <u>Read more..</u>
            </span>
          </div>
          <div className="article-item">
            <div className="image-box">
              <Image src="/images/index-section-07.png" fill alt="fasdgs" />
            </div>
            <span className="date">10 October 2024</span>
            <span className="article-title">
              The Rise of Data in Horticulture
            </span>
            <span className="description">
              horticulture industry. Learn about the latest trends and
              technologies that are revolutionizing plant growth and greenhouse
              operations.
            </span>
            <span className="readmore">
              <u>Read more..</u>
            </span>
          </div>
          <div className="article-item">
            <div className="image-box">
              <Image src="/images/index-section-07.png" fill alt="fasdgs" />
            </div>
            <span className="date">10 October 2024</span>
            <span className="article-title">
              The Rise of Data in Horticulture
            </span>
            <span className="description">
              horticulture industry. Learn about the latest trends and
              technologies that are revolutionizing plant growth and greenhouse
              operations.
            </span>
            <span className="readmore">
              <u>Read more..</u>
            </span>
          </div>
        </div>
      </section> */}
      <section className="section-08">
        <span className="txt-01">
          Subscribe to be notified when our services are live :)
        </span>

        <div className="input-box">
          <input type="text" className="input" placeholder="Enter your email" />
          <button className="btn">Subscribe</button>
        </div>
      </section>
      <style jsx>
        {`
          .home {
            width: 100vw;
            overflow-x: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .fix-btn{
              z-index: 1000;
              padding: 10px 20px;
              position: fixed;
              right: 10px;
              bottom: 10px;
              border-radius: 50px;
              background-color: #adb6c5;
              color:black;
            }
            .section-08{
              width: 100vw;
              background-color: #043A3A;
              display:flex;
              padding: 50px 5%;
              padding-right: 1%;
              justify-content:space-between;
              color:white;

              align-items:center;
              .txt-01{
                max-width: 400px;
              }

              .input-box{
                display:flex;
                position:relative;
                .input{
                  width: 300px;
                  padding: 10px 10px;
                  border-radius: 10px;
                }
                .btn{
                  width: 100px;
                  height: 50px;
                  background-color: #939CB2;
                  border-radius: 0 10px 10px 0;
                  position:relative;
                  right: 50px;
                }
              }
            }

            .section-07{
              width: 100vw;
              height: 100vh;
              display:flex;
              flex-direction: column;
              align-items:center;
              justify-content: center;
              padding: 0 5%;

              .txt-01{
                max-width: 700px;
                text-align:center;
                margin-bottom: 100px;
              }
              .article-box{
                display:flex;

                .article-item{
                  margin: 0 2%;
                  display:flex;
                  flex-direction: column;
                  .image-box{
                    position:relative;
                    width: 100%;
                    padding-top: 60%;
                  }

                  .date{
                    color: #2FB95D;
                    margin: 10px 0;
                  }

                  .article-title{
                    font-size: 1.5rem;
                  }

                  .description{
                    margin: 10px 0;
                  }

                  .readmore{
                    color: #2FB95D;
                  }
                }
              }
            }

            .section-05, .section-06 {
              width: 100vw;
              height: 100vh;
              display: flex;
              background-color: #365154;
              color: white;
              align-items: center;
              padding: 0 5%;

              h1 {
                padding: 0;
              }

              .left {
                flex: 1;
                display:flex;
                align-items:center;
                justify-content:center;
                margin-right: 5%;
                .image-box {
                  position: relative;
                  width: 25vw;
                  padding-top: 58%;
                }
              }

              .right {
                flex: 1;
                display: flex;
                flex-direction: column;
                width: fit-content;

                .image-box-mobile{
                  position: relative;
                  width: 50%;
                  padding-top: 50%;
                  align-self:center;
                  display:none;
                }

                .title-box {
                  .title {
                    width: fit-content;
                    color: white;
                  }
                  .line-image-box {
                    position: relative;
                     display: 'inline-block'
                    width: 100%;
                    padding-top: 5%;
                  }
                }
                .txt-01 {
                  margin: 50px 0;
                }
                .txt-02-box {
                  display: flex;
                  align-items:center;
                  margin: 10px 0;

                  .check-image-box{
                    position:relative;
                    width: 30px;
                    height: 30px;
                    margin-right: 20px;
                  }
                }
                .discover-btn{
                  align-self: start;
                  padding: 10px 20px;
                  border: 1px solid white;
                  border-radius: 50px;
                  margin-top: 50px;
                  transition-duration: 0.7s;
                }

                .discover-btn:hover{
                  background-color:white;
                  color: #365154;
                }
              }
            }

            .section-06{
              .left{
                margin-right: 0;
                margin-left: 5%;
              }
            }

            .section-03 {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding-top: 100px;
              margin-bottom: 100px;
              .arrow-image-box {
                height: 54px;
                width: 20px;
                position: relative;
                margin: 20px 0;
              }
              .image-box-1 {
                position: relative;
                width: 100vw;
                max-width: 1175px;
                padding-top: 30%;
              }
              .image-box-2 {
                position: relative;
                width: 100vw;
                padding-top: 15%;
                
                margin: 50px 0;
              }

              .detail {
                display: flex;
                padding: 0 10%;
                .item-box {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: space-between;
                  flex: 1;
                  height: 400px;

                  .txt-01 {
                    text-align: center;
                    font-weight: 600;
                    font-size: 2rem;
                    color: #525252;
                  }
                  .txt-02 {
                    text-align: center;
                    margin: 30px 0;
                  }
                  .icon-image-box {
                    position: relative;
                    width: 70px;
                    height: 70px;
                  }
                }
              }
            }

            .section-02 {
              display: flex;
              justify-content: space-between;
              width: 100%;
              height: fit-content;
              padding: 0 2%;

              .center {
                width: 50vw;
                height: 100%;
                justify-content: center;
                padding: 100px 0;

                .title {
                  width: 100%;
                  text-align: center;
                  margin-bottom: 100px;
                }
                .bottom {
                  display: flex;
                  .image-box {
                    position: relative;
                    width: 327px;
                    padding-top: 50%;
                    
                  }
                  .txt-box {
                    width: 50%;

                    h2 {
                      font-weight: bold;
                      margin: 10px 0;
                      padding-bottom: 0px;
                    }
                  }
                }
              }
              .right {
                background-color: #365154;
                position:relative;

                .easier-image{
                    position:absolute;
                    top: 200px;
                    right: 100px;
                    width: 150px;
                    height: calc(150px * 1/5);
                  }

                .title{
                  color:white;
                  position:relative;

                }
                .bottom {
                  .image-box {
                    margin-right: 20px;
                  }
                  .txt-box {
                    width: 50%;
                    color: white;
                  }
                }
              }

              .left {
                .bottom {
                  .image-box {
                    margin-left: 20px;
                  }
                }
              }
            }
            .section-01 {
              display: flex;
              justify-content: space-between;
              width: 100%;
              height: 100vh;
              padding: 0 10%;

              .left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                max-width: 650px;

                .txt-01 {
                  font-size: 3rem;
                  .effect {
                    background-color: rgba(147, 156, 178, 0.3);
                    color: #939cb2;
                    border-radius: 50px;
                    padding: 0 10px;
                  }
                }
                .txt-02 {
                  margin: 40px 0;
                }
                .btn-box {
                  margin-top: 40px;
                  .btn {
                    padding: 15px 25px;
                    border-radius: 50px;
                    margin-right: 20px;
                  }
                  .start-btn {
                    background-color: #adb6c5;
                  }
                  .book-btn {
                    background-color: #6f8a8d;
                  }
                }
              }
              .right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .image-box {
                  position: relative;
                  width: calc(50vw * 517 / 900);
                  height: calc(50vw * 750 / 900);
                }
                .image-box2 {
                  top: -50px;
                  position: relative;
                  width: calc(50vw * 517 / 900);
                  padding-top: 70%;
                }
              }
            }

            .divider {
              width: 100vw;
              height: 114px;
              background-color: #ced6d7;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 50px;
              .image-box {
                position: relative;
                width: 50%;
                padding-top: 5%;
              }
            }
          }

          @media(max-width: 1024px){
            .home{
              .section-01{
                .left{
                  .txt-01{
                    font-size: 2.7rem;
                  }
                }
              }

              .section-05{
                .left{
                  .image-box {
                    position: relative;
                    width: 35vw;
                    padding-top: 80%;
                  }
                }
              }
            }
          }

          @media(max-width: 780px){
            .home{
              .web{
                display:none;
              }

              .section-01{
                height: auto;
                padding: 5% 3%;
                .left{
                  width: 60%;

                  .txt-01{
                    font-size: 2.5rem;
                  }

                  .txt-02{
                    font-size: 1.5rem;
                  }

                  .btn-box{
                    .btn{
                      color:white;
                      font-size: 1.2rem;
                      margin-bottom: 10px;
                    }
                  }
                }
                .right{
                  width: 30%;
                  position:relative;
                  .image-box{
                    position:absolute;
                    left: -40%;
                    width: 400px;
                    height: 600px;
                  }
                }
              }
              .divider {
                  .image-box {
                    position: relative;
                    width: 100%;
                    padding-top: 6%;
                  }
                }

              .section-02 {
                display: flex;
                flex-direction: column;
                align-items:center;
                padding: 0;
                
                .center{
                  width: 100% !important;
                  .txt-box{
                    width: 55%;
                      h2{
                        font-size: 1.3rem;
                      }
                  }

                  .bottom{
                    .image-box{
                      width: 45%;
                    }
                  }
                }

                .left{
                  .bottom{
                    padding-left: 2%;
                  }
                }

                .right{
                  .bottom{
                    padding-right: 2%;
                  }
                }
              }

              .section-03 {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 100px;
                margin-bottom: 100px;


                .detail {
                  display: flex;
                  flex-direction: column;
                  padding: 0 10%;
                  margin-top: 50px;
                  .item-box {
                    max-width: 275px;
                    margin-bottom: 50px;

                    .icon-image-box{
                      margin-bottom: 20px;
                    }

                    .txt-02{
                      font-size: 1.5rem;
                    }
                  }
                }
              }


              .section-05, .section-06 {
                height: fit-content !important;
                padding: 100px 3% !important;

                .left{
                  .image-box{
                    display:none;
                  }
                }
                .right{
                  .image-box-mobile{
                    margin: 20px 0;
                    display:block;
                  }
                }
              }
              .section-05{
                flex-direction: column;
              }
              .section-06{
                flex-direction: column;
              }

              .section-07{
                display:none;
              }
              .section-08{
                flex-direction: column;
                align-items:center;
                padding-left: 12%;

                .txt-01{
                  margin-bottom: 20px;
                  margin-right: 20px;
                }
              }

              {/* .discover-btn{
                margin-bottom: 100px;
            } */}  
            }
            
          }
        `}
      </style>
    </div>
  );
}
