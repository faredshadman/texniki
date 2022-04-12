import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.legend.position = "top";
const BarChart = ({ stats }) => {
  const [amounts, setAmounts] = useState([]);
  const [dates, setDates] = useState([]);
  useEffect(() => {
    if (stats && stats.length) {
      const amounts = stats.map((stat) => {
        return stat.amount;
      });
      const dates = stats.map((stat) => {
        return stat.date.toLocaleString().substring(0, 10);
      });
      setDates(dates);
      setAmounts(amounts);
    }
  }, [stats]);
  return (
    <div>
      <Line
        height={300}
        width={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 16,
                  style: "italic",
                  family: "sans-serif",
                },
              },
            },
          },
        }}
        data={{
          labels: dates,
          datasets: [
            {
              label: "satis sayi",
              data: amounts,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 4,
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
