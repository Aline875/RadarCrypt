import { FC } from "react";
import Head from "next/head";
import {FaSearch} from "react-icons/fa"

const Home: FC =()=>
{
  return(
    <div className="flex items-center justify-center min-h-screen bg-custom-ligth">
      <header className="flex items-center">
        <nav className="bg-white">
          <FaSearch className="text-font-color" />
          <input type="search" name="pesquisa-nav" id="pesquisa-nav" className="" placeholder="Pesquisa"/>
        </nav>
      </header>
      <main>
        <aside></aside>
        <div>Dolar</div>
        <div>Real</div>
        <div>Cypto</div>
      </main>
    </div>
  )
}
export default Home;