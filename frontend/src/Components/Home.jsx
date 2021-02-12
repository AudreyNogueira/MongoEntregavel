import React from 'react';
// import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// import Produtos from './Produtos';
const Home = () => {
    return(
        <>
        <main>
            <div className="container-fluid p-3 my-3 bg-dark text-white">
                <h1 className="display-4"> Seja bem vindo(a)!</h1>
                <p className="lead">Aqui em nossa loja, <em>programadores</em> tem <em>desconto</em> em produtos para sua casa!</p>
                <hr className="my-4"/>
                <p>Venha você também fazer parte disso.</p>
            
             {/* <BrowserRouter>
             
                <Link className="btn btn-primary btn-lg" to="/Produtos" role="button">Comprar</Link>

                    <Switch>
                        <Route path='/Produtos' component={Produtos} />
                    </Switch>

             </BrowserRouter>    */}
            </div>
            <br/><br/>
            <div className="text-center">
                <img src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded" alt="..."/>
           
            </div>
        </main>
        </>
    )

}
export default Home;