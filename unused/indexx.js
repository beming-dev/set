"use client";
import styles from "/styles/Welcome.module.css";
import React, { useState } from "react";
import ProgressBar from "/components/Progess";
import Link from "next/link";
import RegisterForm from "/components/RegisterForm";
import Header from "/components/Header";
import { authedRequest } from "/services/http"; // 确保已正确导入

const QuestionPage = ({
  options,
  selectedOption,
  onOptionClick,
  onNextClick,
  question,
}) => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleOptionClick = (option) => {
    onOptionClick(option); // Trigger onOptionClick when an option is selected
    onNextClick(); // Automatically go to the next question
  };

  return (
    <div>
      <div className={styles.question}>
        <h2>{question}</h2>
      </div>
      <div>
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave={() => setHoveredOption(null)}
              className={styles.option}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ThankyouPage = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-y-8">
      <div className="lg:py-12 justify-center px-8">
        <p className="text-3xl font-bold text-whale mb-4">Thank you!</p>
        <p>Are you interested in staying up to date with our latest news?</p>
      </div>
      <div>
        <RegisterForm />
        <div className="grid justify-center text-whale">
          <Link href="/" className="flex gap-2">
            Skip for now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

function Welcome() {
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState(25);
  const [selectedOption, setSelectedOption] = useState(null);
  const [visitorType, setVisitorType] = useState();
  // ... (other state variables)

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onNextClick(); // Automatically go to the next question

    if (option === "Thinking of a Future exit strategy") {
      setVisitorType("Thinking of a Future exit strategy");
    } else if (option === "Thinking of Acquiring") {
      setVisitorType("Thinking of Acquiring");
    }
    // 发送跟踪数据到后端
    authedRequest.get(`/api/track`, {
      params: {
        action: "question response",
        question: currentPage, // 当前问题编号
        value: option, // 用户选择的选项
      },
    });
  };

  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
    setProgress((currentPage / 4) * 100 + 25);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        {currentPage < 5 && (
          <div>
            <h1>Welcome to Silver Era Transition</h1>
            <h6>
              SET streamlines the process of buying and selling of business by
              offering efficient matchmaking, market analysis, and accurate
              valuations, guiding you to a seamless and successful business
              transition. The following questions are to personalise your
              experience.
            </h6>

            <ProgressBar completed={progress} />
          </div>
        )}

        {currentPage === 1 && (
          <QuestionPage
            question={"What best describes you?"}
            options={[
              "Thinking of a Future exit strategy",
              "Thinking of Acquiring",
            ]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={onNextClick}
          />
        )}

        {currentPage === 2 &&
          visitorType === "Thinking of a Future exit strategy" && (
            <QuestionPage
              question={"What would you like to know further?"}
              options={[
                "Find successor",
                "Want to sell",
                "Advisory",
                "Timeframe",
                "Others",
              ]}
              selectedOption={selectedOption}
              onOptionClick={handleOptionClick}
              onNextClick={onNextClick}
            />
          )}

        {currentPage === 2 && visitorType === "Thinking of Acquiring" && (
          <QuestionPage
            question={"What would you like to know further?"}
            options={[
              "Find a business",
              "Match a business",
              "Advisory",
              "Timeframe",
              "Others",
            ]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={onNextClick}
          />
        )}

        {currentPage === 3 &&
          visitorType === "Thinking of a Future exit strategy" && (
            <QuestionPage
              question={"What is your biggest motivation to sell?"}
              options={[
                "Retirement",
                "Burnout",
                "Change",
                "Dispute",
                "Unprofitable",
                "Others",
              ]}
              selectedOption={selectedOption}
              onOptionClick={handleOptionClick}
              onNextClick={onNextClick}
            />
          )}

        {currentPage === 3 && visitorType === "Thinking of Acquiring" && (
          <QuestionPage
            question={"What is your biggest motivation to buy?"}
            options={[
              "Opportunity",
              "Assets",
              "Tech",
              "Industry",
              "Profit",
              "Others",
            ]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={onNextClick}
          />
        )}

        {currentPage === 4 && (
          <QuestionPage
            question={"What market sector are you in?"}
            options={[
              "Healthcare",
              "Financial",
              "Tech",
              "Brick & Mortar",
              "Real estate",
              "Others",
            ]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={onNextClick}
          />
        )}
      </div>

      <div className={styles.container}>
        {currentPage === 5 && <ThankyouPage />}
      </div>
    </div>
  );
}
