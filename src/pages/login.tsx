import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <div>
      {Object.values(providers).map((_, i) => (
        <div key={i}>
          <button onClick={() => signIn()}>Sign in with Google</button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
