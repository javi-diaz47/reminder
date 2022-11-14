import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
import { checkUser, handleAuthChange } from "../utils/auth";
import { supabase } from "../utils/supabase";
import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";

function MyApp({ Component, pageProps, userData }) {
  const [authenticatedState, setAuthenticatedState] = useState("");
  const [user, setUser] = useState(userData);
  const signed = async () => {
    const {
      data: {
        user: { user_metadata },
      },
      error,
    } = await supabase.auth.getUser();

    setUser(user_metadata);

    if (!error) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!user) {
      // signed();
    }
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session);

      console.log(`Event: ${event}`);
      //redirect the user signed from the magiclink to the profile page
      if (event === "SIGNED_IN") {
        setAuthenticatedState("authenticated");
        setUser(jwt.decode(session.access_token).user_metadata);
        handleAuthChange(event, session);
      }

      if (event === "SIGNED_OUT") {
        setAuthenticatedState("not-authenticated");
      }
    });

    checkUser(setAuthenticatedState);

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

export async function getServerSideProps({ req, res }) {
  const token = getCookie("token", { req, res });
  const user = jwt.decode(token);

  return {
    props: {
      userData: user,
    },
  };
}
