#Primeiro suba o banco e depois rode o projeto

#Para subir o banco
sudo service postgresql start

#Para rodar o projeto
node server.js

#Senha do banco
root

-------Se for a primeira vez rodando-----------------
#Pra instalar as dependências (se precisar)
npm install
npx prisma migrate dev

Tutorial no terminal
1- sudo service postgresql start
2- npx prisma migrate dev
3- npm install
4- node server.js 