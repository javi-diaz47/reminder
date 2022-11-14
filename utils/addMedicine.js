import { supabase } from "./supabase";

const addMedicineDB = async (med) => {
  const { data, error } = await supabase.from("medicine").insert([med]);

  if (error) {
    console.log(error);
  }
  console.log(data);
  return { data, error };
};

export { addMedicineDB };
