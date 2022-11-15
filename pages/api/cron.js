// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const cron = require("node-cron");

// export default function handler(req, res) {
//   const { minute, hour, frequency_number, frequency_text } = req.body.reminder;

//   let cronShedule = "";

//   if (frequency_text === "hourly") {
//     cronShedule = `${minute} */${frequency_number} * * *`;
//   }

//   if (frequency_text === "daily") {
//     cronShedule = `${minute} ${hour} */${frequency_number} * *`;
//   }

//   cron.schedule(cronShedule, () => {
//     console.log("Tomate la pastilla");
//     res.status(200).json({ name: "Tomate la pastilla!", schedule: cronShedule });
//   });
// }
