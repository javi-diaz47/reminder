// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("hi");
});

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
