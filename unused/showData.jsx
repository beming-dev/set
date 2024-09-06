import { useEffect, useState } from "react";

export default function ShowData(req, res) {
  const [data, setData] = useState([]);

  const renderBusinessInfo = (info) => {
    const elements = [];

    for (const key in info) {
      elements.push(
        <div key={key}>
          <span>
            {key}: {info[key]}
          </span>
          <br />
        </div>
      );
    }

    return elements;
  };

  useEffect(() => {
    fetch("/api/businessData", { method: "GET" })
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-10">
      {data.map((info, i) => (
        <div key={i} className="flex items-center p-10 border-2 border-solid">
          <span>{renderBusinessInfo(info)}</span>
        </div>
      ))}
    </div>
  );
}

// {

// _id
// 6659630388dde0c1c2aeb6c9
// key
// "BOSN24NKC92V"
// industry
// "Detailhandel non food"
// type
// "Kappers en schoonheidsverzorging"
// country
// "Nederland"
// region
// "Limburg"
// employee
// "2-5"
// age
// "-"
// provisionalContract
// "Langer dan 10 jaar"
// euro
// "70.000"
// content
// "Deze salon doet zo'n 75.000 euro omzet zonder dat de eigenaresse mee k…"
// __v
// 0
// }
