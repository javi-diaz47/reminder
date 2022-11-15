import { supabase } from "./supabase";

const getReminder = async (id) => {
  let { data, error } = await supabase.from("reminder").select("*, medicine: medicine_id (id, name)").eq("user_id", id);
  console.log("from get reminder");
  console.log(data);
  return { data, error };
};

export { getReminder };
