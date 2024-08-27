"use client"
import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registro dos componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface GraficosProps {
  nome: string;
  historico: number[];
}

const Graficos: FC<GraficosProps> = ({ nome, historico }) => {
  // Configuração dos dados para o gráfico
  const data = {
    labels: historico.map((_, index) => `Dia ${index + 1}`), // Usando índices como dias
    datasets: [
      {
        label: `Histórico de ${nome}`,
        data: historico,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Configuração das opções para o gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Evolução do Valor - ${nome}`,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Graficos;
