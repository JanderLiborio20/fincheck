<p align="center">
  <img src="./frontend/src/assets/logo.svg" id="cover-image" alt="Logo" />  
</p>

---

![Capa](https://github.com/JanderLiborio20/fincheck/assets/78622036/dcd6a604-132c-4c9f-b2c5-5ec781ad0ae8)

---

<div id='introducao'>

O **fincheck** é uma aplicação voltada para cadastrar e gerenciar despesas e receitas financeiras, você pode visualizar e interagir com suas transações do dia a dia, filtrar por despesas ou receitas, navegar por meses separadamente e ainda aplicar filtros mais específicos por ano e conta bancária. Esse projeto foi feito usandos de patterns e tecnologias atuais.

</div>

## Tópicos

- [Introdução](#introducao)
- [Instalar e rodar o projeto localmente](#instalacao)
- [Stack utilizada](#stack_utilizada)
- [Demonstração](#demonstração)
- [Aprendizados](#aprendizados)

<div id='instalacao'>

## Instalando e rodando o projeto localmente:

Para rodar o **fincheck** em sua máquina é bem simples.

Você precisa ter instalado:

- Node.js v16
- Docker v4.17.1 e utilizar a imagem Postgres (https://hub.docker.com/_/postgres)
- Yarn ou NPM para a instalação dos pacotes (projeto desenvolvido com Yarn)

Para a instalação dos pacotes você deve entrar em cada pasta individualmente
e rodar o comando `yarn install`, pois neste projeto temos o _api_ e o _frontend_.

Navegue para `../api` e rode no terminal o comando:

```bash
yarn install
```

Repita esse passo para `../frontend`.

### Etapas Back End

<div>
	
- Vá até a pasta do projeto `api` e rode o comando `yarn` ou `npm install` para instalar as dependências do projeto;
- Crie o arquivo `.env` na raíz do projeto e adicione as variáveis necessárias como mostra o arquivo `.env.example`;
- Com as suas variáveis de ambiente configuradas e com o docker instalado, suba o container do banco de dados na sua máquina, usando o `docker-compose`, com o seguinte comando:
  ```bash
  docker compose up -d
  ```
- Agora precisaremos criar as tabelas do nosso banco de dados. Vamos utilizar as migrations geradas pelo prisma:
  ```bash
  npx prisma migrate dev
  ```
- Por fim, rode o projeto com o comando `yarn start:dev` ou `npm start:dev`;

</div>

### Etapas Front End

- Vá até a pasta do projeto `frontend` e rode o comando `yarn` ou `npm install` para instalar as dependências do projeto;
- Crie o arquivo `.env` na raíz do projeto e adicione as variáveis necessárias como mostra no arquivo de exemplo: `.env.example`;
- Na variável de ambiente `VITE_API_URL`, coloque a URL do projeto api que esta rodando;
- Rode o comando de build `yarn dev` ou `npm run dev`;

<div id='stack_utilizada'>
<h2>Stack utilizada</h2>

**Front-end:**

<ul id="frontend-stack">
	<li>React.js</li>
	<li>Typescript</li>
	<li>Tailwind CSS</li>
	<li>Radix UI</li>
	<li>Headless UI</li>
	<li>React Query</li>
	<li>Axios</li>
	<li>Vite</li>
	<li>React Hook Forms (com Zod)</li>
	<li>Swiper</li>
</ul>

**Back-end:**

<ul id="backend-stack">
	<li>NestJS</li>
	<li>Prisma</li>
	<li>Docker</li>
	<li>Jwt</li>
	<li>PostgreSQL</li>
	<li>API REST</li>
	<li>BCryptjs</li>
</ul>

> Em ambos foram utilizados o EditorConfig e Eslint para o desenvolvimento.

</div>

<div id='demonstração'>
<h2>Demonstração</h2>

Ao entrar na aplicação pela primeira vez, você se encontra-rá na página Login e verá um lugar para logar, caso for a primeira vez vai ter um link parar criar usuário.

1. Na tela inicial, você poderá fazer login ou clicar no link para criar uma nova conta.

<p align="center">
  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/291103361-c575d9b6-6b14-412d-80b8-488e6b53b7b0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NDQ2MzMsIm5iZiI6MTcwMjg0NDMzMywicGF0aCI6Ii83ODYyMjAzNi8yOTExMDMzNjEtYzU3NWQ5YjYtNmIxNC00MTJkLTgwYjgtNDg4ZTZiNTNiN2IwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIwMTg1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYwNmY2M2U4MmRlZDk1OTBiNGZiN2I1MWMxOGEyYzg5MDdiNDFlY2ViMjM2NWQ3ZjE0YzA0NTEzYzJmZDA1YWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.cbYSJ1BoY78LJCmNpkGoMx9C_Z4knUag9cxxHJOVTxA"/>  
</p>

2. Caso não tenha uma conta, você poderá criar rapidamente e facilmente.

  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/291103291-81d4ac5e-ad25-4c1c-8398-69aca7d0fc30.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NDQ0NzcsIm5iZiI6MTcwMjg0NDE3NywicGF0aCI6Ii83ODYyMjAzNi8yOTExMDMyOTEtODFkNGFjNWUtYWQyNS00YzFjLTgzOTgtNjlhY2E3ZDBmYzMwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIwMTYxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThmMmI2MDY5MWYyOWFhOGNhMTk1YTcwYjU4OWJjNzZmYWY5ZGQyZWNiOGIyMDY4NzkwZjZiODZiNzZiMDE5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Fmqnq-md9g4V1vngkBj35J8Z6re0rSYB4VQi0zgbvx4"/>  
</p>

3. Esta é a tela principal, onde você poderá criar e visualizar as despesas e receitas cadastradas.

  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/291103517-48533cbf-fe89-4f68-9905-0f8b06013037.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NDQ4MjEsIm5iZiI6MTcwMjg0NDUyMSwicGF0aCI6Ii83ODYyMjAzNi8yOTExMDM1MTctNDg1MzNjYmYtZmU4OS00ZjY4LTk5MDUtMGY4YjA2MDEzMDM3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIwMjIwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwM2YxMTEyNjAzMTU2MzhmNTQ0YjA0NzBkNmExNWNkMzlhYWNmZTBkNGQwZTZkNmRmM2JjOWE1NzdhNTBiMGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5SdupJIdH-ssuXcNa6vDbNizn69OjLSowFtfIO_YCmA"/>  
</p>

4. Clicando no "+" no canto inferior direito abrirar as opção para cadastrar

5. Aqui você vai cadastras as suas contas como tipo **Investimento**, **Conta corrente** **Investimento** e **Dinheiro Fisico**.

  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/291103686-422b9a33-c201-46b9-bfed-b96c71a20618.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NDUwMjgsIm5iZiI6MTcwMjg0NDcyOCwicGF0aCI6Ii83ODYyMjAzNi8yOTExMDM2ODYtNDIyYjlhMzMtYzIwMS00NmI5LWJmZWQtYjk2YzcxYTIwNjE4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIwMjUyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ1NGNmMDkxMGM1YWQxODRjYmM1NmRjNmQxYTJkMzk2NmQ0ZmYzMjI4NjU2NmUwOWVlOWQyYTMzN2ZlZDdiZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.I4q7FLwi5dB0EaavB0kc2Lg0zAJtKwgaqD2b-KMSxRc"/>

6. Aqui, você poderá cadastrar uma nova despesa, escolhendo a categoria desejada, a conta pela qual foi paga e também a data.

  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/291103830-31b03a6f-b8c5-4109-92dc-09fed7ecff13.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NDUyNDgsIm5iZiI6MTcwMjg0NDk0OCwicGF0aCI6Ii83ODYyMjAzNi8yOTExMDM4MzAtMzFiMDNhNmYtYjhjNS00MTA5LTkyZGMtMDlmZWQ3ZWNmZjEzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIwMjkwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM4MWJiNWM0YTM3NTM1OWViOTg2NTU5MWFkY2VlYWM5NmFmNjc2MTMyYTM3NGJiYzM3NzY1MTJjNjgwZTIwZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.AAlf7aOZJ02ELpU1dryPlBk5CRPgTOpPPbrNIp3iK-U"/>

7. Aqui, você poderá cadastrar uma nova receita, escolhendo a categoria desejada, a conta pela qual foi recebida e também a data.

  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/291104138-9b4d3b81-c381-4c49-bef4-a1b2a923bd77.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NDU1NjMsIm5iZiI6MTcwMjg0NTI2MywicGF0aCI6Ii83ODYyMjAzNi8yOTExMDQxMzgtOWI0ZDNiODEtYzM4MS00YzQ5LWJlZjQtYTFiMmE5MjNiZDc3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIwMzQyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM5ODg5MzNiMDBjYmM4NmY1MzU1NWJjZDU1NmRkMTQxZTM2MDQxZGJiZjg4YjAyZTEwMTc5MmVlZjhmMmNhYTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.LUQ3RiE2Ur7tMdlHMbTQ-MZmnluD1IgEwGKtgDxWaa8"/>

8. Com receitas e despesas cadastradas, você poderá usar os filtros para escolher o mês, ano ou conta desejada.

  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/291104231-e899982c-cb26-4204-8002-e805949a0284.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NDU2NzUsIm5iZiI6MTcwMjg0NTM3NSwicGF0aCI6Ii83ODYyMjAzNi8yOTExMDQyMzEtZTg5OTk4MmMtY2IyNi00MjA0LTgwMDItZTgwNTk0OWEwMjg0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIwMzYxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg4Mjk0ODRjZDRmNWY5NTkwNTY4OTY0YWIyMTdhMjMwN2EyMzc4MWU5Nzg0ODRmZGVhZjBmOTU3Y2I1NzM0NjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.2UmOj-OEYWWjZap6kXrruk47Fw-jCvEmrYP7rfWAvjs"/>

  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/291104400-2b0503ce-130d-4e8c-bc85-85968711adb7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NDU5MTEsIm5iZiI6MTcwMjg0NTYxMSwicGF0aCI6Ii83ODYyMjAzNi8yOTExMDQ0MDAtMmIwNTAzY2UtMTMwZC00ZThjLWJjODUtODU5Njg3MTFhZGI3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIwNDAxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI4Yzk4YjE2ZTUyMzUxNGU4YWQ3YjlmMzU3OGYyODJkZGVkMGM3MWI5YmMzMGEzMDBjNDMzMjgxY2RhM2Q5OTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.XO6sNf4gsTCNuoE8BQXJhT_1PJN4nR9fnwey-ZtK-QY"/>

9.  O site também pode ser acessado facilmente pelo celular, pois é responsivo.

  <img width="" height="450" src="https://private-user-images.githubusercontent.com/78622036/291104653-a07e124b-9fea-44b6-96cb-d651dd03e017.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI4NDYxNjgsIm5iZiI6MTcwMjg0NTg2OCwicGF0aCI6Ii83ODYyMjAzNi8yOTExMDQ2NTMtYTA3ZTEyNGItOWZlYS00NGI2LTk2Y2ItZDY1MWRkMDNlMDE3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE3VDIwNDQyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ1YjdlYTFhNDg2MDZkZWI2NWVmNGRiNDdhY2UxNWE0NTFkMTQ3NmRlZDViNmI0NGZiNTNmMTdkOTY1ZjBlMjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.K4pk0DlLukaTSVcSxnWZIb1nNyD11CS5x9NO5wpNCk0"/>

</p>

</div>

<div id='aprendizados'>
<h2>Aprendizados</h2>

Neste projeto aprendemos a utilizar muito bem o _React_, e principalmente a técnica de _Typecript_,
como podemos ver neste trecho de código no arquivo `useDashboard` que exibe toda a tela de **Dashboard**:

```typescript
\frontend\src\view\pages\Dashboard\components\DashboardContext\useDashboard.ts

 interface DashboardContextValue {
  areValuesVisible: boolean;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  isEditAccountModalOpen: boolean;
  accountBeingEdited: null | BankAccount;
  toggleValuesVisibility(): void;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  openNewTransactionModal(type: 'INCOME' | 'EXPENSE'): void;
  closeNewTransactionModal(): void;
  openEditAccountModal(bankAccoutn: BankAccount): void;
  closeEditAccountModal(): void;
}
```

Além disso o uso de _tailwindcss_ se faz presente durante todas as etapas de estilização deste projeto, como podemos ver aqui:

```typescript
frontend\src\view\pages\Dashboard\components\Accounts\Card.tsx

 <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
      role="button"
      onClick={() => openEditAccountModal(data)}
    >
      <div>
        <BankAccountTypeIcon type={type} />

        <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
          {name}
        </span>
      </div>

      <div>
        <span
          className={cn(
            `block text-gray-800 font-medium tracking-[-0.5px]`,
            !areValuesVisible && 'blur-sm',
          )}
        >
          {formatCurrency(currentBalance)}
        </span>

        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
```

</div>
