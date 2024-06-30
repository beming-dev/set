//selling.js
import axios from "axios";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const onClick = async () => {
  await axios.post("/api/crawl", {});
};
export default function Selling() {
  const router = useRouter();
  return (
    <div>
      <button onClick={onClick}>crawl</button>
    </div>
  );
}
