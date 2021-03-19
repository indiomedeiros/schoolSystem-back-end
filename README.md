## School system:

Sistema que represante o básico de uma API de escola. 

Devs responsáveis: 
Aline Vignoli de Lima
Índio Medeiros
Marina Azzi Nogueira

As funcionalidades básicas são:

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma;

→ Pegar a idade de algum estudante a partir do id

## Instruções

* `npm install`:
Instala as dependências do projeto.

### Criar o arquivo .env
Criar o arquivo `.env` com as informações do seu banco de dados.
```
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
```

### Criar e popular as tabelas
* `npm run set-tables`:
Cria as tabelas necessárias para o projeto.

* `npm run populate`:
Popula as tabelas com dados iniciais.

### Executar o projeto

* `npm run start`: 
Inicia a conexão com o banco de dados e roda o projeto.
Precisa dar o comando `ctrl + C` para parar a execução.

* `npm run dev`:
Reinicia o servidor automaticamente toda a vez que o projeto for salvo.

### Endpoints
Todos os Enpoints e exemplos de requisições estão disponíveis na nossa [documentação](https://documenter.getpostman.com/view/13242412/TVza9tK7).
