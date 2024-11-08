const express = require("express");
const Cliente = require("../models/Cliente");
const router = express.Router();

router.post("/cadastrar", async (req, res) => {
    const { nome, email, telefone, endereco } = req.body;

    try {
        const novoCliente = new Cliente({ nome, email, telefone, endereco });
        await novoCliente.save();
        res.json({ message: "Cliente cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao cadastrar o cliente." });
    }
});

module.exports = router;
