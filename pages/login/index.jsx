import Image from "next/image";
import { useState } from "react";
import { signInWithEmail, signInWithGoogle } from "../../utils/auth";
import googleIcon from "../../public/google-icon.svg";
import loginSVG from "../../public/login.svg";

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
    <div className="flex justify-center items-center flex-col text-center ">
      <Image src={loginSVG} alt="login image" />
      <h2 className="text-2xl mb-8">
        Crea una cuenta o Inicia sesión
        <p className="font-bold">¡Todo con un solo click!</p>
      </h2>
      <button
        className="w-fit rounded-2xl shadow-xl flex flex-col justify-center items-center p-4 hover:scale-105 active:scale-95 duration-300 transition-all"
        onClick={signInWithGoogle}
      >
        <Image src={googleIcon} alt={"Google icon"} />
        Continuar con google
      </button>
    </div>
  );
}
export default Login;
