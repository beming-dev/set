//advisors.js
import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import { useRouter } from "next/router";
import { authedRequest } from "/services/http";
import styles from "/styles/Home.module.css";
import Layout from "/components/Layout";
import ChatButton from "/components/ChatButton";
import ImageDisclose from "/components/ImageDisclose";

const inter = Inter({ subsets: ["latin"] });

function Selling() {
  const router = useRouter();

  const trackAndNavigate = async (url, actionValue) => {
    await authedRequest.get(`/api/track`, {
      params: {
        action: "click image",
        value: actionValue,
        page: router.pathname,
      },
    });
    router.push(url);
  };

  return (
    <Layout>
      <div className={styles.abtContainer}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div>
              <div>
                <h4 className="text-left">
                  Do you need a professional advisor?
                </h4>
              </div>
              <h6>
                At SET, we collaborate with number of professoinal legal and
                financial advisors you are looking for and can trust.
              </h6>
            </div>
          </div>
        </div>

        <div className={styles.colcentered}></div>
        <div>
          <ImageDisclose
            imageUrl="/images/financialadvisor.jpg"
            title="Financial Advisors"
            description="coming soon"
            onClick={() =>
              trackAndNavigate("/financial-advisors", "Financial Advisors")
            }
          />
          <ImageDisclose
            imageUrl="/images/legaladvisor.jpg"
            title="Legal Advisors"
            description="coming soon"
            onClick={() =>
              trackAndNavigate("/legal-advisors", "Legal Advisors")
            }
          />
        </div>
        <div className="fixed bottom-6 right-6">
          <ChatButton />
        </div>
      </div>
    </Layout>
  );
}
