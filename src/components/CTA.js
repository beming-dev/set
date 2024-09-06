import React from "react";
import { useRouter } from "next/router";
import { authedRequest } from "/services/http";

export default function CTA() {
  const router = useRouter();

  const trackAndNavigate = async (url, actionValue) => {
    await authedRequest.get(`/api/track`, {
      params: {
        action: "click button",
        value: actionValue,
        page: router.pathname,
      },
    });
    router.push(url);
  };

  return (
    <div className="w-full glass border-solid border md:rounded-lg p-10 text-center text-gray-800">
      <div>
        <h2>What is your role in the journey with us?</h2>
      </div>
      <div className="flex justify-between mx-auto max-w-sm">
        <button
          className="bg-grizzlybear hover:text-white hover:bg-grizzlybearhv text-white font-thin text-lg p-3 px-14 rounded-full shadow-inner"
          onClick={() => trackAndNavigate("/selling", "Seller")}
        >
          Seller
        </button>
        <button
          className="bg-grizzlybear hover:text-white hover:bg-grizzlybearhv text-white font-thin text-lg p-3 px-14 rounded-full shadow-inner"
          onClick={() => trackAndNavigate("/buying", "Buyer")}
        >
          Buyer
        </button>
      </div>
    </div>
  );
}
