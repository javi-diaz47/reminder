import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
import { checkUser, handleAuthChange } from "../utils/auth";
import { supabase } from "../utils/supabase";

function MyApp({ Component, pageProps }) {
  const [authenticatedState, setAuthenticatedState] = useState("");
  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session);

      //redirect the user signed from the magiclink to the profile page
      if (event === "SIGNED_IN") {
        setAuthenticatedState("authenticated");
        console.log(session);
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
