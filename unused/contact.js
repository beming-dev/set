import { Inter, Stint_Ultra_Condensed } from "next/font/google";
import Layout from "/components/Layout";
import ContactForm from "/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

function Contact() {
  return (
    <Layout>
      <div className="container mx-auto max-w-6xl p-8 grid lg:grid-cols-2 mt-12 gap-8">
        <div className="col-span-1">
          <p className="text-3xl font-bold text-whale mb-4">Contact us</p>
          <p className="text-gray-600">
            You can reach out to{" "}
            <span className="text-whale">info@silvereratransition.com</span> or
            send us a message directly!
          </p>
        </div>
        <div className="col-span-1">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}
