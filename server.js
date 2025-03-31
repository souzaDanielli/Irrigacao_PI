const express = require("express");
const prisma = require("./db");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

