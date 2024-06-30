import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { questionValueState } from "../recoil/questionState";
import { useAuth } from "../services/auth";

export default function Question() {
  const normalQStart = 0;
  const normalQEnd = 1;
  const normalQCnt = 2;
  const sellerQStart = 6;
  const sellerQEnd = 8;
  const sellerQCnt = 3;
  const buyerQStart = 2;
  const buyerQEnd = 5;
  const buyerQCnt = 4;
  const advisorQStart = 10;
  const advisorQEnd = 12;
  const advisorQCnt = 3;
  const qEnd = 13;

  const { authed } = useAuth();

  useEffect(() => {
    if (authed) router.push("/");
  }, []);

  const questionList = [
    {
      q: "What best descries you?",
      a: ["Sell a company", "Buy a company", "Find an advisor"],
    },
    {
      q: "What industry are you interested in?",
      a: ["choose an option:"],
    },
    {
      q: "What is your preferred geographical location?",
      a: ["North Europe", "East Europe", "South Europe", "West Europe"],
    },
    {
      q: "What is your primary goal in acquiring a business?",
      a: [
        "Expansion into new markets",
        "Diversification of products/services",
        "Investment Opportunity",
        "Other:",
      ],
    },
    {
      q: "What level of involvement are you looking for in the business post-acquisition?",
      a: ["Active Management", "Strategic Oversight", "Passive Investment"],
    },
    {
      q: "What is your investment range?",
      a: ["Under 500k", "500k to 1M", "1M to 5M", "Over 5M"],
    },
    {
      q: "What is your primary reason for selling?",
      a: [
        "Retirement",
        "Seeking New Opportunities",
        "Financial Reasons",
        "Other:",
      ],
    },
    {
      q: "How would you describe the current condition of your business?",
      a: ["Thriving", "Stable", "Declining", "In a turnaround"],
    },
    {
      q: "Are you open to staying on post-sale for a transition period?",
      a: ["Yes", "Possibly", "No"],
    },
    {
      q: "Which advisory service are you interested in?",
      a: ["M&A", "Accounting & Financial ", "Legal", "Strategic", "Other"],
    },
    {
      q: "How urgent is your need for advisory services?",
      a: ["3 months +", "6 months +", "12 months +", "24 months +"],
    },
    {
      q: "How do you prefer to engage with your advisor?",
      a: [
        "In-person consultations",
        "Email or Phone ",
        "Virtual meetings",
        "A Combination of the options",
      ],
    },
    {
      q: "Would you like to be contacted with opportunities or offers based on your answers?",
      a: ["Yes", "No"],
    },
  ];
  const [questionNum, setQuestionNum] = useState(0);
  //1: sell, 2:buy
  const [type, setType] = useState(0);
  const router = useRouter();
  const optionList = [
    "Select",
    "Technology & IT Services",
    "Manufacturing",
    "Healthcare & Pharmaceuticals",
    "Retail",
    "Hospitality & Tourism",
    "Professional Services (e.g., legal, accounting, consulting)",
    "Construction & Real Estate",
    "Agriculture & Food Production",
    "Education & Training",
    "Transportation & Logistics",
    "Technology & IT Services",
    "E-commerce",
    "Media & Entertainment",
  ];

  const [question, setQuestion] = useRecoilState(questionValueState);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < qEnd; i++) arr.push(-1);
    setQuestion(arr);
  }, []);

  const onBtnClick = (event, idx) => {
    if (questionNum == 0) {
      if (event.target.innerText == "Sell a company") {
        setType(2);
      } else if (event.target.innerText == "Buy a company") {
        setType(1);
      } else if (event.target.innerText == "Find an advisor") {
        setType(3);
      }
    }

    const newQuestionChoice = [...question];
    newQuestionChoice[questionNum] = idx;
    setQuestion(newQuestionChoice);
  };
  const onNextClick = () => {
    if (question[questionNum] == -1) {
      alert("Choose one plz");
      return;
    }

    if (questionNum == 1) {
      //buyer
      if (type == 1) {
        setQuestionNum(() => 2);
      } else if (type == 2) {
        //seller
        setQuestionNum(() => 6);
      } else if (type == 3) {
        //advisor
        setQuestionNum(() => 9);
      }
    } else if (questionNum == 5 && type == 1) {
      setQuestionNum((questionNum) => 12);
    } else if (questionNum == 8 && type == 2) {
      setQuestionNum((questionNum) => 12);
    } else if (questionNum == questionList.length - 1) {
      router.push("/signup");
    } else {
      setQuestionNum((questionNum) => questionNum + 1);
    }
  };
  const onPrevClick = () => {
    if (questionNum == 0) return;
    if (
      questionNum == sellerQStart ||
      questionNum == buyerQStart ||
      questionNum == advisorQStart
    ) {
      setQuestionNum((questionNum) => normalQEnd);
    } else if (questionNum == qEnd) {
      if (type == 1) {
        setQuestionNum((questionNum) => buyerQEnd);
      } else if (type == 2) {
        setQuestionNum((questionNum) => sellerQEnd);
      } else if (type == 3) setQuestionNum((questionNum) => advisorQEnd);
    } else {
      setQuestionNum((questionNum) => questionNum - 1);
    }
  };
  return (
    <div className="question">
      <div className="content">
        <span className="text-01">{questionList[questionNum]?.q}</span>
        <div className="button-box">
          {questionList[questionNum]?.a.map((answer, i) =>
            questionNum == 1 ? (
              <select
                name="option"
                className="btn-q option-btn"
                key={i}
                onChange={(e) => onBtnClick(e, e.target.selectedIndex)}
              >
                {optionList.map((text, j) => (
                  <option className="option" value={j} key={j}>
                    {text}
                  </option>
                ))}
              </select>
            ) : (
              <button
                className={
                  i == question[questionNum] ? "btn-q selected" : "btn-q"
                }
                key={i}
                onClick={(e) => onBtnClick(e, i)}
              >
                {answer}
              </button>
            )
          )}
        </div>
        <div className="prevnext-box">
          <button className="prev" onClick={onPrevClick}>
            Prev
          </button>
          <button className="next" onClick={onNextClick}>
            Next
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .question {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 100px;
            margin-top: 50px;
            .content {
              width: 1065px;
              height: 501px;
              background: linear-gradient(
                274.79deg,
                #bac0cb 19.12%,
                #cbe6fe 88.74%
              );
              border-radius: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
              .text-01 {
                width: 90%;
                font-weight: bold;
                font-size: 4rem;
                text-align: center;
              }
              .button-box {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                justify-content: center;
                .btn-q {
                  padding: 20px 30px;
                  background-color: #001024;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50px;
                  color: white;
                  font-size: 1.5rem;
                  transition-duration: 0.5s;
                  margin: 10px 10px;
                  border: 1px solid #001024;
                }
                .option-btn {
                  position: relative;
                  outline: none;
                  width: 60%;
                  padding: 20px 10px;
                  .option {
                  }
                }
                .option:hover {
                  background-color: #001024;
                  color: white;
                }

                .btn-q:hover {
                  background-color: white;
                  color: black;
                  border: 1px solid #001024;
                }

                .selected {
                  background-color: white;
                  color: black;
                  border: 1px solid #001024;
                }
              }

              .prevnext-box {
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0 20px;
                color: white;
                .prev {
                  border-radius: 50px;
                  padding: 10px 30px;
                  background-color: #001024;
                }
                .next {
                  border-radius: 50px;
                  padding: 10px 30px;
                  background-color: #001024;
                }
              }
            }
          }

          @media (max-width: 1200px) {
            .question {
              height: 60vh;
              .content {
                width: 750px;
                height: fit-content;
                padding: 40px 0;
                .text-01 {
                  font-size: 3rem;
                }
                .button-box {
                  margin-top: 50px;
                  .btn-q {
                    height: auto;
                    padding: 15px 20px;
                    margin: 10px 10px;
                    font-size: 1.3rem;
                  }
                }

                .prevnext-box {
                  margin-top: 50px;
                }
              }
            }
          }

          @media (max-width: 768px) {
            .question {
              height: auto;
              .content {
                width: 350px;
                height: fit-content;
                padding: 20px 0;
                .text-01 {
                  font-size: 2.5rem;
                }
                .button-box {
                  flex-direction: column;
                  align-items: center;
                  .btn-q {
                    width: 90%;
                    height: auto;
                    padding: 10px 10px;
                    margin: 10px 0;
                    font-size: 1.5rem;
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
