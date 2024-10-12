import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignIn() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="signin-page">
      <div>
        <button className="login-btn" onClick={() => signIn()}>
          Sign in with Google
        </button>
      </div>

      <style jsx>{`
        .signin-page {
          height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .login-btn {
            width: 100px;
            height: 50px;
            border: 1px solid black;
            border-radius: 10px;
          }
        }
      `}</style>
    </div>
  );
}
