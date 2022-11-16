import { getCookie } from "cookies-next";
import { AnimatePresence, MotionConfig } from "framer-motion";
import jwt from "jsonwebtoken";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { addMedicineDB } from "../../utils/addMedicine";
import { supabase } from "../../utils/supabase";
import { motion } from "framer-motion";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { useRouter } from "next/router";

export default function addMedicine({ id }) {
  const [name, setName] = useState("");
  const { modal, handleModal } = useModal();
  const route = useRouter();

  const onSubmit = async (ev) => {
    ev.preventDefault();
    // addMedicineDB({ name, user_id: id });
    const med = {
      user_id: id,
      name,
    };

    const { error } = addMedicineDB(med);
    if (!error) {
      handleModal();
      setName("");
      setTimeout(() => {
        route.back();
      }, 500);
    }
    console.log(med);
  };

  return (
    <div className="flex flex-col gap-8 max-w-screen-md">
      {modal("¡Se agrego Exitosamente!")}
      <h2 className="text-3xl font-bold">Agregar Medicamento</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <Input
          placeholder="Nombre del medicamento"
          name="name"
          value={name}
          required
          onChange={(ev) => setName(ev.target.value)}
        />
        <div className="flex justify-center">
          <Button type="submit" value="Agregar" />
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const token = getCookie("token", { req, res });
  const id = jwt.decode(token).sub;
  console.log(id);
  return {
    props: {
      id,
    },
  };
}
