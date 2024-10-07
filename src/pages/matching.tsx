import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Matching() {
  const router = useRouter();
  const { query } = router;

  const [matchingList, setMatchingList] = useState([]);

  useEffect(() => {
    if (query.id) {
      axios
        .get(`/api/matching`, { params: { id: query.id } })
        .then(({ data }) => {
          setMatchingList(data);
        });
    }
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Buyer List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {matchingList.map((item) => (
          <div
            key={item.seller_id._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform =
                "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
            <p>
              <strong>Seller ID:</strong> {item.seller_id._id}
            </p>
            <p>
              <strong>Industry:</strong>
              {item.seller_id.industry}
            </p>
            <p>
              <strong>Cash Flow:</strong> €{item.seller_id.cashFlow}
            </p>
            <p>
              <strong>Geographic Location:</strong>{" "}
              {item.seller_id.geographicalLocation}
            </p>
            <p>
              <strong>Profit Margins:</strong> €
              {item.seller_id.profitMargins.toLocaleString() * 100000}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
