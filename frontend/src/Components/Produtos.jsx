import React from 'react';
import Produto from './Produto';
import './estilo.css';
function Produtos (){
     return(
         <>

<div className="container-fluid p-3 my-3 bg-dark text-white">
        <h1 className="display-4"> Os melhores produtos você encontra aqui !</h1>
        <hr className="my-4"/>
        <p className="lead"> Realize sua compra e ganhe 20% de desconto no valor total.</p>
</div>

{/*  */}

{/*  */}
<center>
       <ul className="list-group w-25 p-4">
  <li className="list-group-item active">Todos</li>
  <li className="list-group-item">Geladeira</li>
  <li className="list-group-item">Fogão</li>
  <li className="list-group-item">Microondas</li>
  <li className="list-group-item">Maquina de lavar</li>
  <li className="list-group-item">Lava louças</li>
</ul> 
</center>

{/* <ul class="list-group w-25 p-3">
                            <li class="list-group-item active" onClick={filtro}>Todos</li>
                            <span>{produtos.lenght}</span>
                            {categorias.map((categoria) => {
                                return(
                                    <li key={"categoria.idprodutos"} onclick={filtro} class="list-group-item">{categoria.categoria}
                                    <span className>{totalProdutos(categoria.idprodutos)}</span>
                                    </li>
                                )
                            }
                            )}
                            </ul> */}
{/* 
        <article>
            <img src={props.imagem} alt={props.descricao} />
            <h4>{props.precofinal}</h4>
        </article> */}

<Produto />
         </>
     )
     
 }
 export default Produtos;