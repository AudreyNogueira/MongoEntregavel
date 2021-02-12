import React from "react";
import './estilo.css';

const Produto = () =>{
    const [produtos,setProdutos] = React.useState([]);
    const [filtroId,setFiltro] = React.useState([0]);

    React.useEffect(async () => {
        const url = "http://localhost:8080/produtos/";
        const response = await fetch(url);
        setProdutos(await response.json());
    }, [])

    const cate = produtos.map(categoria => {
        const obj = { };
        obj.idprodutos = categoria.idprodutos; 
        obj.categoria = categoria.categoria; 
        return obj;
    });

    const categorias = [...new Set(cate.map(JSON.stringify))].map(JSON.parse);

    function shadow(event) {
        const img = event.target;
        if (img.classList[6] == "border-0" && img.classList[7] != "shadow-lg") {
            img.classList.toggle('shadow-lg',true);
        } else if (img.parentElement.classList[6] == "border-0" && img.parentElement.classList[7] != "shadow-lg") {
            img.parentElement.classList.toggle('shadow-lg',true);
        } else if (img.parentElement.parentElement.classList[6] == "border-0" && img.parentElement.parentElement.classList[7] != "shadow-lg") {
            img.parentElement.parentElement.classList.toggle('shadow-lg',true);
        }    
    }

    function shadowless(event) {
        const img = event.target;
        if (img.classList[7] == "shadow-lg") {
            img.classList.toggle('shadow-lg',false);
        } else if (img.parentElement.classList[7] == "shadow-lg") {
            img.parentElement.classList.toggle('shadow-lg',false);
        } else if (img.parentElement.parentElement.classList[7] == "shadow-lg") {
            img.parentElement.parentElement.classList.toggle('shadow-lg',false);
        } 
         
    }

    // function totalProdutos(idprodutos){
    //     let count = 0;
    //     for (const i of produtos) {
    //         if(i.idprodutos == idprodutos) {
    //             ++count;
    //         }
    //     }
    //     return count;
    // }

    // function filtro(event){
    //     let lista = event.target.id;
    //     setFiltro(lista)
    // }
    // nao esta sendo utilizado.
    return(
        <main className="container-fluid">
        {/* <hr/> */}
        <div className="d-flex">
            <aside className="categoria">
                {/* <ul className="list-group ml-2">
                    <li id={0} className="list-item list-group-item-action d-flex justify-content-between align-items-center" onClick={filtro}>
                        Todos
                        <span className="badge badge-primary badge-pill">{produtos.length}</span>
                    </li>
                    {categorias.map((categoria) => {
                        return(
                            <li key={categoria.idprodutos} id={categoria.idprodutos} className="list-item list-group-item-action d-flex justify-content-between align-items-center" onClick={filtro}>
                                {categoria.categoria}
                                <span className="badge badge-primary badge-pill">{totalProdutos(categoria.idprodutos)}</span>
                            </li>
                        )
                    })}
                </ul> */}
{/*  */}
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


            </aside>

            {/* <br/> <br/> <br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/> */}
            <div className="container row mx-auto">
                {produtos.map((produto) => {
                    if (filtroId == 0) {
                        return(
                            <div key={produto.idprodutos} className={produto.idprodutos + " col-sm-12 col-lg-4 card align-items-center p-5 border-0"} onMouseLeave={shadowless}>
                                <div className="card-img-top div-height vh-100 d-flex align-items-center"> <img className="h-75 mx-auto" src={produto.imagem} alt={produto.categoria}/> </div>
                                <div className="card-body">
                                    <p className="card-text"> {produto.descricao} </p>
                                    <del className="card-title preço">R$ {produto.preco}</del>
                                    <p className="card-title precofinal text-danger font-weight-bold text-monospace">R$ {produto.precofinal}</p>
                                </div>
                            </div>
                        )
                    } else if(produto.idprodutos == filtroId){
                        return(
                            <div key={produto.id} className={produto.idprodutos + " col-sm-12 col-lg-4 card align-items-center p-5 border-0"} onMouseLeave={shadowless}>
                                <div className="card-img-top div-height vh-100 d-flex align-items-center"> <img className="h-75 mx-auto" src={produto.imagem} alt={produto.categoria}/> </div>
                                <div className="card-body">
                                    <p className="card-text"> {produto.descricao} </p>
                                    <del className="card-title preço">R$ {produto.preco}</del>
                                    <p className="card-title preçofinal text-danger font-weight-bold text-monospace">R$ {produto.precofinal}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
                
        </div>
       


       
    </main>
    )
}

export default Produto;