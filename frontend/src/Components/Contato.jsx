import React from "react";

const Contato = () => {
    const [comentarios,setComentarios] = React.useState([]);
    const [render,setRender] = React.useState(false)
    
    const [msg,setMsg] = React.useState('');
    const [nome,setNome] = React.useState('');
    const [show,setShow] = React.useState(false);
    const [btn,setBtn] = React.useState('Ver Mensagens');

    React.useEffect(async () => {
        const url = "http://localhost:8080/Contato";
        const response = await fetch(url);
        setComentarios(await response.json());
    },[render])

    function registerComment(event) {
        event.preventDefault();

        // let formData = new FormData(event.target);
        let formData = {
            nome: nome,
            msg: msg,
            };
        const url = "http://localhost:8080/Contato/";
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setMsg(dados)

            setTimeout(() => {
                setMsg(false);
            }, 1000)
              })
              
              setNome('');
              setMsg('');
    }
    function showTable() {
        setShow(!show);
        if (show) {
            setBtn('Ver Mensagens');
        } else {
            setBtn('Ocultar Mensagens');
        }
    }

    return(
        <main className="container-fluid p-3 my-3 bg-dark text-white">
          
<h1 className="display-4">Entre em contato conosco!</h1>
<hr className="my-4"/>
<p className="lead">Nos ajude a melhorar o nosso atendimento.</p>
<br/>
            

<div class="row no-gutters">
<div class="col-sm-6 col-md-5"> <img src="./img/email-logo.png" height="50px" width="50px"/></div>
<div class="col-sm-6 col-md-5"><img src="./img/whats-logo.jpg" height="50px" width="50px"/></div>
<div className="col-sm-6 col-md-5">contato@fullstackeletro.com</div>
<div className="col-6 col-md-5">(11)99999-9999</div>
</div>

            <br/><br/>

          <hr/>
     
    
            <form onSubmit={registerComment}>
                <label htmlFor="nome">Nome:</label>
                <input className="form-control" type="text" id="nome" value={nome} name="nome" placeholder="Digite aqui seu nome." onChange={event=>setNome(event.target.value)}/><br/>
                <label htmlFor="msg">Mensagem:</label><br/>
                <textarea className="form-control" name="msg" id="msg" cols="90" rows="5" placeholder="Deixe aqui sua mensagem" onChange={event=>setMsg(event.target.value)}></textarea><br/>
                <button className="btn btn-info w-30 mt-1" position="left" type="submit">Enviar mensagem</button>                
                <button className="btn btn-info w-30 mt-1 ml-2" type="button" onClick={showTable}>{btn}</button>
            </form>

          {/* {msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                Mensagem enviada com sucesso!
            </div>} */}
            {show && <table className="table table-striped table-sm table-responsive-sm">
          
            <tr>
                        <th scope="col">Cliente</th>
                        <th scope="col">Data</th>
                        <th scope="col">Mensagem</th>
            </tr>
                <tbody>
                    {comentarios.map(comentarios =>{
                        return(
                            <tr key={comentarios._id}>
                                <td>{comentarios.nome}</td>
                                <td>{comentarios.data}</td>
                                <td>{comentarios.msg}</td>
                            </tr>
                        )
                    })}
                </tbody>  </table> } 
        </main> 
    )
}

export default Contato;