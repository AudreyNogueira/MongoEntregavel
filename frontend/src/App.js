import React from 'react';
// import Menu from './Components/Menu';
// import Footer from './Components/Footer';
// import Card from './Components/Card';
import gif from './carrega.gif';
import cupom from './cupom.gif';
import {lazy, Suspense} from 'react';
// import Produtos from '../src/Components/Produto';
import Produto from './Components/Produto';

const Menu = lazy(() => import('./Components/Menu'));
const Footer = lazy(() => import('./Components/Footer'));
// const LojaConteudo = lazy(() => import('./Components/LojaConteudo'));

function App() {
  return (
    <>
     <Suspense fallback={<center><h2>Carregando... um momento!</h2></center>}>
        <Menu />
        </Suspense>

         {/* <Suspense fallback={<center>
        <img src={cupom} alt="cupom desconto"/> </center>}>
         </Suspense> */}

          <Suspense fallback={
          <img src={cupom}/>}>
            <Produto />
          </Suspense>


         <Suspense fallback={<center>
        <img src={gif} alt="carregando"/> </center>}>
         <Footer />
         </Suspense>


       
      {/* <Menu /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App;
