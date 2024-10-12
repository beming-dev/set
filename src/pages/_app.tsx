import "../styles/globals.css";
import localFont from "next/font/local";
import { AuthProvider } from "../services/auth";
import Layout from "../components/Layout";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

declare module "next-auth" {
  interface Session {
    // 추가하고자 하는 사용자 정의 속성
    user: {
      id: string; // 예: 사용자의 고유 ID
      email: string;
      name: string;
      image: string;
    };
  }
}
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

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}): any {
  return (
    <>
      <main className={sfpro.className}>
        <RecoilRoot>
          <AuthProvider>
            <SessionProvider session={session}>
              <Layout background="default">
                <Component {...pageProps} />
              </Layout>
            </SessionProvider>
          </AuthProvider>
        </RecoilRoot>
      </main>
    </>
  );
}
