import { getUserIdFromToken } from "../../utils/getUserIdFromToken";
import { supabase } from "../../utils/supabase";

export default function ReminderId({ medicine }) {
  console.log(medicine);
  return (
    <div>
      <h2 className="text-3xl capitalize">{medicine.name}</h2>
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

  console.log(medicine);
  return {
    props: {
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
