"use client"
// components/Comparativo.tsx
import { FC } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registro dos componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ComparativoProps {
  moedas: {
    nome: string;
    historico: number[];
  }[];
}

const Comparativo: FC<ComparativoProps> = ({ moedas }) => {
  // Cores para as colunas
  const colors = [
    'rgba(255, 99, 132, 0.8)', // Rosa
    'rgba(54, 162, 235, 0.8)', // Azul
    'rgba(153, 102, 255, 0.8)', // Roxo
  ];

  // Preparando os dados para o gráfico
  const labels = moedas[0].historico.map((_, index) => `Dia ${index + 1}`);

  const data = {
    labels,
    datasets: moedas.map((moeda, index) => ({
      label: moeda.nome,
      data: moeda.historico,
      backgroundColor: colors[index % colors.length], // Usar cores do array
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      borderRadius: 8, // Arredondamento das colunas
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Comparativo das Moedas',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Comparativo;
