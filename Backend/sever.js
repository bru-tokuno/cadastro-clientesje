const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const clienteRoutes = require("./routes/clienteRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Conexão com o MongoDB
mongoose.connect("mongodb://localhost:27017/cadastroClientes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado ao MongoDB");
}).catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
});

// Rotas
app.use("/", clienteRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
