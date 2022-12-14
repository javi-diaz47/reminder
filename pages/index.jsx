import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import vg from "../public/Medicine-amico.svg";

export default function Home() {
  const notify = () =>
    toast("Wow so Easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <div>
      {/* <button type="button" onClick={notify} className="">
        {" "}
        Notify !{" "}
      </button> */}
      <ToastContainer />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-4xl font-bold  flex flex-col gap-6">
        <h2 className="flex gap-3">
          Bienvenido a <h2 className="text-primary"> MyDocReminder</h2>
        </h2>
        <p className="text-xl font-normal">
          La aplicacion predilecta para llevar un registro de las pastillas y tratamientos que tienes
        </p>

        <section>
          <Image src={vg} />
        </section>
        <Link className="underline underline-offset-2 hover:text-primary duration-150" href="login">
          ¡Inicia sesión o crea tu cuenta!
        </Link>
      </main>
    </div>
  );
}
