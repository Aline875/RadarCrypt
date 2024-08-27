import { FC } from "react";
import Head from "next/head";
import Header from "./components/Header";
import CurrencyChart from "./components/Moedas";

const Home: FC = () => {
  const moedas = [
    { nome: 'Dolar', valor: '5.30', historico: [5.20, 5.25, 5.28, 5.30, 5.32] },
    { nome: 'Real', valor: '1.00', historico: [1.00, 1.01, 1.00, 0.99, 1.00] },
    { nome: 'Crypto', valor: '0.0001', historico: [0.00009, 0.0001, 0.00011, 0.0001, 0.0001] },
  ];

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-custom-light">
        <main className="flex flex-wrap justify-center gap-6">
          {moedas.map((moeda, index) => (
            <div key={index} className="border rounded-lg bg-white p-4 shadow-md w-80 text-center">
              <h2 className="text-xl font-semibold mb-2">{moeda.nome}</h2>
              <p className="text-lg text-gray-700 mb-4">Valor atual: {moeda.valor}</p>
              <CurrencyChart nome={moeda.nome} historico={moeda.historico} />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
