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

//rota post
app.post("/api/dados", async (req, res) => {
    const { umidadeSolo1, umidadeSolo2, umidadeSolo3, umidadeSolo4, irrigador1, irrigador2, irrigador3, irrigador4 } = req.body;
    try {
        const novaLeitura = await prisma.sensor.create({
            data: { umidadeSolo1, umidadeSolo2, umidadeSolo3, umidadeSolo4, irrigador1, irrigador2, irrigador3, irrigador4 },
        });
        res.json(novaLeitura);
    } catch (error) {
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