import { supabase } from "./supabase";

const signInWithEmail = async (email) => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
  });

  console.log(data);
  return { data, error };
};

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  return { data, error };
}

// Call the auth api to set or remove the cookie of the user authentication
const handleAuthChange = async (event, session) => {
  if (event === "SIGNED_IN") {
    await fetch("api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }
  if (event === "SIGNED_OUT") {
    await fetch("api/auth", {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
    });
  }
};

//Set the user authenticatedState if the user is authenticated
const checkUser = async (setAuthenticatedState) => {
  // Check if user exist
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    return "not-authenticated";
  }

  if (session) {
    setAuthenticatedState("authenticated");
  }
};

export { signInWithEmail, signInWithGoogle, checkUser, handleAuthChange };
