"use client";
import { FC } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CurrencyChartProps {
  nome: string;
  historico: number[];
}

const CurrencyChart: FC<CurrencyChartProps> = ({ nome, historico }) => {
  const data = {
    labels: Array.from({ length: historico.length }, (_, i) => `Dia ${i + 1}`),
    datasets: [
      {
        label: nome,
        data: historico,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default CurrencyChart;
