import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Contato from './Contato';
import Lojas from './Lojas';
import Produtos from './Produtos';

const Menu = () => {
    return(  
        <>  
        <BrowserRouter>
        {/* <div className="navbar navbar-light" style="background-color: #e3f2fd;"> */}
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light"> */}
            <nav className="navbar navbar-expand-lg navbar-default bg-dark text-body">
            {/* <nav class="navbar navbar-light" style="background-color: #e3f2fd;"> */}
                <Link className="navbar-brand" to="/"><img src="./img/logoo.png" width="70" height="38"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link text-light" to="/Produtos"><b>Produtos </b><span className="sr-only">(produtos)</span></Link>
                        <Link className="nav-item nav-link text-light" to="/Lojas"><b>Lojas</b><span className="sr-only">(lojas)</span></Link>
                        <Link className="nav-item nav-link text-light" to="/Contato"><b>Contato</b><span className="sr-only">(contato)</span></Link>
                    </div>
                </div> 
                
            </nav>
        </div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Produtos' component={Produtos} />
                <Route path='/Lojas' component={Lojas} />
                <Route path='/Contato' component={Contato} />
            </Switch>   
        </BrowserRouter>
   
    </>
    )
}
export default Menu;