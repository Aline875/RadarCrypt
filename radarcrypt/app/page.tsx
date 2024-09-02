import { FC } from "react";
import Graficos from "./components-1/Moedas";
import Comparativo from "./components-1/Comparacao";
import Sidebar from "./components-1/BarraLateral";
import Header from "./components-1/Header";

const Home: FC = () => {
  const moedas = [
    { nome: 'Dolar', valor: '5.30', historico: [4.99, 5.25, 5.32, 5.35, 5.20] },
    { nome: 'Real', valor: '1.00', historico: [1.00, 1.2, 1.8, 1.5, 1.3] },
    { nome: 'Crypto', valor: '0.00232', historico: [0.23, 0.431, 0.311, 0.231, 0.891] },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 mt-16 bg-custom-light dark:bg-gray-900">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-custom-light dark:bg-gray-900">
          <main className="flex flex-wrap justify-center gap-6 p-4">
            {moedas.map((moeda, index) => (
              <div key={index} className="border rounded-lg bg-white dark:bg-gray-800 p-4 shadow-md w-80 text-center mt-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-300">{moeda.nome}</h2>
                <p className="text-lg text-gray-700 mb-4 dark:text-gray-400">Valor atual: {moeda.valor}</p>
                <Graficos nome={moeda.nome} historico={moeda.historico} />
              </div>
            ))}
          </main>
          <div className="mt-12 w-full max-w-4xl bg-white dark:bg-gray-800 border rounded-lg">
            <Comparativo moedas={moedas} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
