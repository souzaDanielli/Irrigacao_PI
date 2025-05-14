const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

//Rota para receber os dados do ESP8266 e enviar para a API principal
app.post("/api/dados", async (req, res) => {
    try{
        const response = await axios.post("https://irrigacao-psi.vercel.app/api/dados", req.body, {
            headers: {"Content-Type": "application/json"},
        });
        res.status(response.status).json(response.data);
    } catch(error){
        console.error("Erro ao enviar dados para a API: ", error.message);
        res.status(500).send("Erro ao enviar dados para API principal.");
    }
});

//Teste pro proxy
app.get("/", (req, res) => {
    res.send("Proxy HTTP funcionando! ");
})

app.listen(port, () => {
  console.log(`Proxy HTTP rodando na porta ${port}`);
});