const express = require('express');
const prisma = require('./db');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

//rota get
app.get("/api/dados", async (req, res) => {
    try{
        console.log('Rota /api/dados chamada');
        const sensores = await prisma.sensor.findMany();
        res.json(sensores);
    } catch (error){
        console.error('Erro ao buscar dados:', error);
        res.status(500).json({ error: "Erro na busca de dados" });
    }
});

//rota post
app.post("/api/dados", async (req, res) => {
    const { dispositivo, umidade, irrigador } = req.body;
    try {
        console.log('Rota /api/dados chamada com dados:', req.body);
        const novaLeitura = await prisma.sensor.create({
            data: { dispositivo, umidade, irrigador },
        });
        res.json(novaLeitura);
    } catch (error) {
        console.log('Nova leitura:', novaLeitura);
        res.status(500).json({ error: "Erro ao inserir dados" });
    }
});

//rota delete
app.delete("/api/dados/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.sensor.delete({ where: { id: parseInt(id) } });
        res.json({ message: "Registro deletado!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar dados" });
    }
});

app.listen(port, () => {
    console.log(`Server na porta ${port}`);
});