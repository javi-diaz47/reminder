import { supabase } from "./supabase";

const getMedicine = async (id) => {
  console.log(id);
  let { data: medicines, error } = await supabase.from("medicine").select("*").eq("user_id", id);

  if (error) {
    console.log(error);
    return [];
  }

  return medicines;
};

export { getMedicine };
