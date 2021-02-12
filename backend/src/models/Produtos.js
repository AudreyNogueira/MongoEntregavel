// const { Schema, model } = require('mongoose')

// const ProdutoSchema = new Schema({
//     nome: {
//         type: String
//     },
//     preco: {
//         type: Number
//     },
// })

// const modelo = model("produtos", ProdutoSchema)

// module.exports = modelo

// const connection = require('../config/connection');

// class Produtos {
//     constructor() {
//         this.idprodutos;
//         this.categoria;
//         this.descricao;
//         this.preco;
//         this.precofinal;
//         this.imagem;
//     }

//     getAll(req, res) {
//         connection.query("SELECT * from produto", (error, result) => {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.json(result);
//             }
//         });
//     }
// }

// module.exports = new Produtos;