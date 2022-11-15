import { supabase } from "./supabase";

const addReminder = async (reminder) => {
  const { data, error } = await supabase.from("reminder").insert([reminder]);

  // if (!error) {
  //   const {alert} = await fetch("/api/cron", {
  //     method: "POST",
  //     headers: new Headers({ "Content-Type": "application/json" }),
  //     credentials: "same-origin",
  //     body: JSON.stringify({ reminder }),
  //   });
  //   return {alert, error: null}
  // }

  {
    /*Cada 2 horas at 0:0 - 0 0/2 * * */
  }
  {
    /*Cada 2 dias at 0:0 - 0 0 * * 0/2 */
  }
  console.log(error);
  return { data, error };
};

export { addReminder };
