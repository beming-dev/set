"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MatchItem from "../src/components/MatchItem";
import LongMatchItem from "../src/components/LongMatchItem";
import { useRouter } from "next/router";

function Search() {
  const currents = ["X Germany", "X Netherlands", "X Restaurant", "X Bar"];
  const hashtags = [
    "Industry",
    "Location",
    "Business Health",
    "Property",
    "Takeover Type",
    "Transition Period",
  ];
  const router = useRouter();
  const { q } = router.query;
  const [question, setQuestion] = useState("");
  const [recommendedItem, setRecommendedItem] = useState([]);
  const [subRecommendedItem, setSubRecommendedItem] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (q && q.length > 3) {
      setQuestion(() => q);
      onSubmitQuestion();
    }
  }, []);
  const sendMessage = async (messages) => {
    try {
      const response = await fetch("/api/createMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  const onSearchChange = (e) => {
    setQuestion(() => e.target.value);
  };

  const findAucualData = async (creteria) => {
    try {
      const response = await fetch("/api/business/filtered", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creteria),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitQuestion = async (e) => {
    if (e) {
      e.preventDefault();
    }
    setSearching(() => true);
    const message = await sendMessage(question);
    const actualData = await findAucualData(message.data);

    if (actualData.data.length > 3) {
      setRecommendedItem(actualData.data.slice(0, 3));
      setSubRecommendedItem(actualData.data.slice(3, actualData.length));
    } else {
      setRecommendedItem(actualData.data.slice(0, actualData.length));
    }
    setSearching(() => false);
  };

  return (
    <div className="search">
      <div className="content-01">
        <span className="title">Find your next opportunity</span>
        <span className="text-01">
          Find the <u>ideal</u> business quickly
        </span>
        <div className="search-bar">
          <form className="input-box" onSubmit={onSubmitQuestion}>
            <input
              className="input"
              type="text"
              placeholder="Describe what you are looking for"
              onChange={onSearchChange}
            />
            <button type="submit" className="send-box">
              <Image src="/images/send.png" fill alt="send" />
            </button>
          </form>
        </div>
        <div className="current-box">
          <span className="text-02">Current Search:</span>
          <div className="current-list-box">
            {currents.map((current, i) => (
              <span className="current-item" key={i}>
                {current}
              </span>
            ))}
          </div>
        </div>
        <div className="hashtag-box">
          {hashtags.map((hashtag, i) => (
            <span className="hashtag-item" key={i}>
              {hashtag}
            </span>
          ))}
        </div>
      </div>
      <div className="content-02">
        <span className="title">Matches FOR YOU</span>
        <div className="matches-box">
          {searching ? (
            <div id="loader"></div>
          ) : (
            recommendedItem?.map((item, i) => (
              <MatchItem key={i} itemInfo={item}></MatchItem>
            ))
          )}
        </div>
        <span className="text-01">Other possible matches</span>
        <div className="other-box">
          {searching ? (
            <div id="loader"></div>
          ) : (
            subRecommendedItem?.map((item, i) => (
              <LongMatchItem key={i} itemInfo={item}></LongMatchItem>
            ))
          )}
        </div>
      </div>
      <style jsx>
        {`
          #loader {
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .search {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            .content-01 {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 50px 0;

              .title {
                font-size: 4rem;
                font-weight: bold;
              }
              .text-01 {
                font-size: 2rem;
                margin: 30px 0;
              }
              .search-bar {
                width: 100%;
                .input-box {
                  width: 100%;
                  height: 60px;
                  position: relative;
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
                    padding: 0 20px;
                    border: none;
                    outline: none;
                  }
                  .input::placeholder {
                    color: #040722;
                    font-weight: 100;
                  }
                }
              }

              .current-box {
                width: 100%;
                height: 63px;
                display: flex;
                align-items: cennter;
                background-color: #d9d9d9;
                border-radius: 50px;
                padding: 0 20px;
                margin: 15px 0;

                .text-02 {
                  display: flex;
                  align-items: center;
                }

                .current-list-box {
                  display: flex;
                  align-items: center;

                  .current-item {
                    background-color: #91c4ff;
                    border-radius: 50px;
                    padding: 0 10px;
                    color: #5c5c5c;
                    margin: 0 10px;
                  }
                }
              }

              .hashtag-box {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .hashtag-item {
                  padding: 10px;
                  background-color: #d9d9d9;
                  border-radius: 50px;
                }
              }
            }

            .content-02 {
              width: 100vw;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-top: 50px;
              .title {
                font-size: 2rem;
                font-weight: bold;
              }
              .image-box {
                position: relative;
              }

              .matches-box {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-bottom: 100px;
                margin-top: 50px;
                flex-wrap: wrap;
                .match-item {
                  width: 100px;
                  height: 100px;
                  background-color: #040722;
                }
              }

              .text-01 {
                font-size: 2rem;
                font-weight: 100px;
                margin: 50px 0;
              }

              .other-box {
                display: flex;
                flex-direction: column;
                .image-box {
                  width: 1065px;
                  height: 257px;
                  margin: 10px 0;
                }
              }
            }
          }

          @media (max-width: 768px) {
            .search {
              .content-01 {
                width: 100%;
                align-items: center;
                .title {
                  text-align: center;
                }
                .search-bar {
                  width: 90%;
                  .input-box {
                  }
                }
                .current-box {
                  width: 90%;
                  width: 90%;

                  .current-list-box {
                    overflow-x: scroll;

                    .current-item {
                      flex-shrink: 0;
                    }
                  }
                }

                .hashtag-box {
                  width: 90%;
                  flex-wrap: wrap;
                  justify-content: center;
                  .hashtag-item {
                    margin: 2px 5px;
                  }
                }
              }
              .content-02 {
                .matches-box {
                  flex-direction: column;
                  align-items: center;

                  .image-box {
                    width: 348px;
                    height: 330px;
                    margin-bottom: 50px;
                  }
                }

                .other-box {
                  .image-box {
                    width: calc(1065px * 360 / 1065);
                    height: calc(257px * 360 / 1065);
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

export default Search;
