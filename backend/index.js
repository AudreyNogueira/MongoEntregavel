// const express = require('express'),
//     server = express(),
//     cors = require('cors'),
//     mysql = require('mysql');

// const database = mysql.createConnection({
//     "host": "localhost",
//     "user": "root",
//     "password": "",
//     "database": "fseletro"
// })

// server.use(cors());
// server.use(express.json());

//     server.get('/',(req,res) => {
//       res.end("<html>Hello word</html>")  
//     })

//     server.get('/produtos', (req,res) => {
//         const sql= "SELECT * FROM produto";
//         database.query(sql, (error,results) => {
//         if(error){
//             return error;

//         } res.json(results)
//     })
// })

// server.get('/Contato', (req,res) => {
//     const sql= "SELECT * FROM comentarios";
//     database.query(sql, (error,results) => {
//     if(error){
//         return error;

//     } res.json(results)
// })
// })

//     server.post('/Contato', (req,res)=>{
//         const { nome, msg } = req.body
//         const sql = `INSERT INTO comentarios(nome, msg) VALUES ('${nome}', '${msg}')`;
//         database.query(sql, (error, results) => {
//             if(error){
//                 return error;
//             } res.json(results);
//         })
//     })

//     server.listen(8080, ()=>{
//         console.log("Server on")
//     })