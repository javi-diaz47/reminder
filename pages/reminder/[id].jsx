import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { addReminder } from "../../utils/addReminder";
import { getUserIdFromToken } from "../../utils/getUserIdFromToken";
import { supabase } from "../../utils/supabase";

import { useModal } from "../../hooks/useModal";
import { useState } from "react";

export default function ReminderId({ userId, medicine }) {
  const { modal, handleModal } = useModal();
  const [pushNotification, setPushNotification] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const inputObject = Object.fromEntries(formData);
    const reminder = {
      ...inputObject,
      medicine_id: medicine.id,
      user_id: userId,
    };

    const { error } = addReminder(reminder);

    if (!error) {
      setPushNotification(`¡Recuerda... ${medicine.name}!`);
      setTimeout(() => {
        handleModal();
      }, 60000);
    }
  };

  return (
    <div className="max-w-lg">
      {modal(pushNotification)}
      <h2 className="text-3xl capitalize font-bold">Crear recordatorio</h2>
      <p className="text-2xl mb-10">{medicine.name}</p>
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <div>
          <label className="text-lg">Hora</label>
          <div className="flex gap-8">
            <Input placeholder="Hora: 0...23" name="hour" type="number" step="1" min="0" max="23" required />
            <Input placeholder="Minutos: 0...59" name="minute" type="number" step="1" min="0" max="59" required />
          </div>
        </div>
        <div>
          <label className="text-lg">Frecuencia</label>
          <div className="flex items-center gap-4">
            Cada
            <Input placeholder="6" name="frequency_number" type="number" step="1" min="0" max="31" required />
            <select
              required
              name="frequency_text"
              className="block py-2.5 px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option defaultValue="hourly" value="hourly">
                horas
              </option>
              <option value="daily">dias</option>
              {/* <option value="0/2">Cada 2 dias</option> 0 0 * * 0/2 */}
              {/* <option value="0/3">Cada 3 dias</option> */}
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit" value="Crear" />
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = await getUserIdFromToken(context);

  const { data: medicine } = await supabase
    .from("medicine")
    .select("*")
    .match({ id: context.params.id, user_id: id })
    .limit(1)
    .single();

  return {
    props: {
      userId: id,
      medicine,
    },
  };
}

export async function getServerSidePaths() {
  const { data: medicines, error } = await supabase.from("medicine").select("*");
  return {
    paths: medicines.map((medicine) => ({
      params: {
        id: medicine.id,
      },
    })),
    fallback: false,
  };
}
