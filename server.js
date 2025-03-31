const express = require('express');
const prisma = require('./db');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

//rota get
app.get("/api/dados", async (req, res) => {
    try{
        const sensores = await prisma.sensor.findMany();
        res.json(sensores);
    } catch (error){
        res.status(500).json({ error: "Erro na busca de dados" });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server na porta ${port}`);
});