import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import { useState } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { addMedicineDB } from "../../utils/addMedicine";
import { supabase } from "../../utils/supabase";

export default function addMedicine({ id }) {
  const [name, setName] = useState("");
  const onSubmit = async (ev) => {
    ev.preventDefault();
    // addMedicineDB({ name, user_id: id });
    const med = {
      user_id: id,
      name,
    };
    console.log(med);

    const { data, error } = await supabase.from("medicine").insert([med]);
    console.log(data);

    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-8 max-w-screen-md">
      <h2 className="text-3xl font-bold">Agregar Medicamento</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <Input
          placeholder="Nombre del medicamento"
          name="name"
          value={name}
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
