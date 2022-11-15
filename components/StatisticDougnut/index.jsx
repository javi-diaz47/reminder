import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticDougnut = ({ taked, forgot }) => {
  const data = {
    labels: ["Tomadas", "Olvidadas"],
    datasets: [
      {
        data: [taked, forgot],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Whom'st let the dogs out",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export { StatisticDougnut };
