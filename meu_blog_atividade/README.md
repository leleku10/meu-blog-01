Este é um projeto simples de blog desenvolvido em React para o front-end e Express para o back-end, com banco de dados MongoDB.

Pré-requisitos
Certifique-se de que você tenha instalado os seguintes itens:

Node.js (versão 16 ou superior)
npm (gerenciador de pacotes do Node.js)
MongoDB (executando localmente ou em uma nuvem)

1. Instalação
Siga os passos abaixo para configurar o ambiente de desenvolvimento local:

2. Clone o repositório:
git clone https://github.com/iPysco/meu_blog_atividade.git
cd meu_blog_atividade

3. Instale as dependências do front-end: No diretório raiz do projeto, execute:
npm install

4. Instale as dependências do back-end: Navegue até o diretório do back-end
cd meu-blog-back-end-10-10
npm install

5. Rodando a Aplicação
Front-end (React)
Para iniciar o front-end em modo de desenvolvimento, execute o seguinte comando no diretório raiz:
npm start
O aplicativo será aberto automaticamente em http://localhost:3000.

Back-end (Express)
No diretório do back-end, inicie o servidor:
npm run start
O servidor estará em execução em http://localhost:8000.

6. Scripts Disponíveis
Front-end:
npm start: Inicia o servidor de desenvolvimento.
npm run build: Cria uma versão otimizada para produção.
npm test: Executa os testes.

Back-end:
npm run start: Inicia o servidor Express com nodemon para recarregar automaticamente o servidor ao detectar mudanças no código.

7. Configuração do Banco de Dados
Certifique-se de que o MongoDB está configurado corretamente e rodando. A aplicação tentará se conectar ao MongoDB utilizando a configuração local padrão (porta 27017). Caso utilize uma URL específica para o MongoDB, você pode ajustá-la nas variáveis de ambiente.