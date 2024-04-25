//import http from "http";
import "dotenv/config"
import app from "./src/app.js"


const PORT = 3000;

// const rotas = {
//     "/": "Curso de node.js e express API",
//     "/livros":"Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "Text/plain"});
//     res.end(rotas[req.url])
// })

app.listen(PORT, ()=>{
    console.log("Servidor escutando");
})