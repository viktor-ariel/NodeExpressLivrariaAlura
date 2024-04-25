import express from "express"
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await conectaNaDataBase()
conexao.on("error", (erro) => {
    console.error("erro de conexao", erro)
})
conexao.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso")
})


const app = express();
routes(app)




app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index,1)
    res.status(200).send("Livro removido")
});


export default app

//mongodb+srv://admin:<password>@cluster0.qnu6cxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0