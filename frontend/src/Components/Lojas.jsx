import React from 'react';


 function Lojas (){
    return(     
        <div className="container-fluid p-3 my-3 bg-dark text-white">
        <h1 className="display-4"> Nossas lojas</h1>
        <hr className="my-4"/>
        <p className="lead"> Venha conhecer nossas lojas!</p>
      
        <div class="card-deck">
        <div class="card bg-success">
          <div class="card-body text-center">
            <p class="card-text">São paulo <br/> Avenida Paulista, 985 <br/> 10° andar, Jadins <br/>(11)4444-4444</p>
          </div>
        </div>
        <div class="card bg-success">
          <div class="card-body text-center">
            <p class="card-text">Rio de Janeiro<br/> Avenida Presidente Vargas, 5000 <br/>10° andar, Centro <br/>(21)3333-3333</p>
          </div>
        </div>
        <div class="card bg-success">
          <div class="card-body text-center">
            <p class="card-text">Santa Catarina <br/>Rua Major Avila, 370<br/>  Vila Mariana <br/> (47)5555-5555</p>
        
          </div>
        </div>

      </div>
      <br/><br/><br/><br/>

      </div>
    );
 }
 export default Lojas;