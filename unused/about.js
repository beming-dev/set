import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ChatButton from "/components/ChatButton";
import Layout from "/components/Layout";

const inter = Inter({ subsets: ["latin"] });

function About() {
  return (
    <Layout>
      <div className="container mx-auto max-w-6xl p-8">
        <h1>Who we are</h1>
        <h4>Smart & Trusted Partner.</h4>
      </div>
      <div className="bg-grizzlybear pt-8 text-justify">
        <div className="container mx-auto max-w-6xl p-8">
          <p className="text-white">
            At SET, we are committed to reinventing the future of business
            connections by embracing the dual principles of matchmaking and
            upcycling. Our mission is to create a sustainable economy by
            facilitating strategic connections between businesses and
            individuals. We believe in the power of transformative partnerships
            that not only enhance business growth but also prioritise
            environmental responsibility and resource efficiency. Through our
            innovative matchmaking platform, we connect like-minded businesses
            and businesses, enabling them to collaborate, share resources, and
            adopt circular economy practices. Our goal is to catalyse a movement
            where every business transaction contributes to a more sustainable,
            resilient, and successful economy for all.
          </p>
        </div>
        <div className="container mx-auto max-w-6xl p-8 grid lg:grid-cols-2 gap-x-8">
          <div className="col-span-1">
            <p className="text-white">
              Our platform harnesses the latest advancements in AI to bring
              buyers and sellers together seamlessly, nurturing efficient and
              mutually beneficial transactions. By utilizing sophisticated
              algorithms and machine learning, we ensure that every connection
              made is rooted in data-driven precision, enhancing the probability
              of successful outcomes for all parties involved.
            </p>
            <p className="text-white">
              We take pride in our unwaivering dedication to transparency and
              accuracy. Our team of experts constantly refines our AI models to
              deliver up-to-date market valuations, enabling our users to
              navigate dynamic market conditions with confidence. At SET, we are
              more than just a platform; we are a trusted partner in your
              journey towards successful transactions and informed
              decision-making.
            </p>
          </div>
          <div className="col-span-1">
            <Image
              src="/images/about.png"
              width={500}
              height={500}
              alt="about"
              className={styles.centerimg}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
