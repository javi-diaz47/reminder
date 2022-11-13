import { useState } from "react";
import { signInWithEmail, signInWithGoogle } from "../../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const onSubmit = async () => {
    ev.preventDefault();

    const { data, error } = await signInWithEmail(email);

    if (data) {
      router.push("medicine");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" value={email} />
        <button type="submit">Ingresar</button>
      </form>
      <button onClick={signInWithGoogle}>Continue with Google</button>
    </div>
  );
}

export default Login;
