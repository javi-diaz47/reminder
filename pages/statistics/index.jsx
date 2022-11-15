import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { StatisticDougnut } from "../../components/StatisticDougnut";
import { getReminder } from "../../utils/getReminder";
import { Button } from "../../components/Button";

function Statistics({ reminders }) {
  return (
    <div className="max-w-lg flex flex-col gap-8">
      {reminders.map((r, i) => (
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold">{r?.medicine?.name}</h2>
          {i === 0 ? (
            StatisticDougnut({ taked: i === 0 ? 1 : 0, forgot: 0 })
          ) : (
            <div className="flex flex-col gap-6 text-2xl items-center">
              ¡Aun no has hecho ningun recordatorio!
              <Link href={`reminder/${r.medicine_id}`}>
                <Button value="Crear Recordatorio" />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Statistics;

export async function getServerSideProps({ req, res }) {
  const token = getCookie("token", { req, res });
  const id = jwt.decode(token).sub;
  console.log(id);

  const { data: reminders } = await getReminder(id);

  console.log(reminders);

  return {
    props: {
      id,
      reminders,
    },
  };
}
