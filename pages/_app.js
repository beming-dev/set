import "/styles/globals.css";
import localFont from "next/font/local";
import { AuthProvider } from "/services/auth";
import Layout from "/components/Layout";
import { RecoilRoot } from "recoil";

// Font files can be colocated inside of `pages`
const sfpro = localFont({
  src: [
    {
      path: "./sf_pro_display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./sf_pro_display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./sf_pro_display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./sf_pro_display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./sf_pro_display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={sfpro.className}>
        <RecoilRoot>
          <AuthProvider>
            <Layout background="default">
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </RecoilRoot>
      </main>
    </>
  );
}
