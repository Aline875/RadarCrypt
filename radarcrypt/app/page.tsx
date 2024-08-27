import { FC } from "react";
import Head from "next/head";
import Header from "./components/Header";

const Home: FC =()=>
{
  return(
  <div>
    <Header></Header>
    <div className="flex items-center justify-center min-h-screen bg-custom-ligth">
      <main className="flex items-center ">
        <aside></aside>
        <div className="border rounded-lg bg-white">Dolar</div>
        <div className="border rounded-lg bg-white">Real</div>
        <div className="border rounded-lg bg-white">Cypto</div>
      </main>
    </div>
  </div>
  )
}
export default Home;