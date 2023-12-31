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

![Captura de tela 2023-12-17 161601](https://github.com/JanderLiborio20/fincheck/assets/78622036/81d4ac5e-ad25-4c1c-8398-69aca7d0fc30)

2. Caso não tenha uma conta, você poderá criar rapidamente e facilmente.

![Captura de tela 2023-12-17 161826](https://github.com/JanderLiborio20/fincheck/assets/78622036/c575d9b6-6b14-412d-80b8-488e6b53b7b0)

3. Esta é a tela principal, onde você poderá criar e visualizar as despesas e receitas cadastradas.

![Captura de tela 2023-12-17 162149](https://github.com/JanderLiborio20/fincheck/assets/78622036/48533cbf-fe89-4f68-9905-0f8b06013037)

4. Clicando no "+" no canto inferior direito abrirar as opção para cadastrar

5. Aqui você vai cadastras as suas contas como tipo **Investimento**, **Conta corrente** **Investimento** e **Dinheiro Fisico**.

![Captura de tela 2023-12-17 162508](https://github.com/JanderLiborio20/fincheck/assets/78622036/422b9a33-c201-46b9-bfed-b96c71a20618)

6. Aqui, você poderá cadastrar uma nova despesa, escolhendo a categoria desejada, a conta pela qual foi paga e também a data.

![Captura de tela 2023-12-17 162829](https://github.com/JanderLiborio20/fincheck/assets/78622036/31b03a6f-b8c5-4109-92dc-09fed7ecff13)

7. Aqui, você poderá cadastrar uma nova receita, escolhendo a categoria desejada, a conta pela qual foi recebida e também a data.

![Captura de tela 2023-12-17 163408](https://github.com/JanderLiborio20/fincheck/assets/78622036/9b4d3b81-c381-4c49-bef4-a1b2a923bd77)

8. Com receitas e despesas cadastradas, você poderá usar os filtros para escolher o mês, ano ou conta desejada.

![Captura de tela 2023-12-17 163602](https://github.com/JanderLiborio20/fincheck/assets/78622036/e899982c-cb26-4204-8002-e805949a0284)

![Captura de tela 2023-12-17 163940](https://github.com/JanderLiborio20/fincheck/assets/78622036/2b0503ce-130d-4e8c-bc85-85968711adb7)

9.  O site também pode ser acessado facilmente pelo celular, pois é responsivo.

![Captura de tela 2023-12-17 164215](https://github.com/JanderLiborio20/fincheck/assets/78622036/a07e124b-9fea-44b6-96cb-d651dd03e017)

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
