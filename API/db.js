const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

prisma.$connect()
    .then(() => console.log("Conectado ao banco de dados com sucesso"))
    .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

module.exports = prisma;