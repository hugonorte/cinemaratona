# Cinemaratona
## Instruções de uso desse repositório
---
Para poder utilizar esse código, será necessário:
- Ter o GIT instalado no seu computador
- Ter uma conta no Github
- Ter a versão 22 do NodeJS instalada no seu computador
- Ter uma conta de desenvovedor na plataforma **The Movie Database**. Para criar a sua conta, [clique aqui]('https://www.themoviedb.org/signup'). Após criar a sua conta, gere a sua chave de API. Ela é única, pessoal e intranferível.

## IMPORTANTE:
Quando for editar o código desse repositório, **jamais** utilize a branch master.Crie sempre uma nova branch para fazer o desenvolvimento.
```bash
git checkout -b nome_da_minha_branch_de_trabalho
```
Após a finalização, abra um pull request e peça no grupo para que um outro desenvolvedor revise, teste e aprove o seu trabalho antes de agregá-lo ao pacote final.

### Passos para instalação
1. Acesse pelo terminal / console a pasta onde deseja instalar o projeto. Em seguida, faça um clone do projeto
```bash
  git clone https://github.com/hugonorte/cinemaratona.git
```
2. Acesse o diretório criado quando o comando acima foi finalizado
```bash
cd cinemaratona
```
3. Rode o comando para instalar as dependências de javascript
```bash 
npm install
```
4. Inicie o servidor de desenvolvimento com o comando abaixo
```bash
npm run dev
```
5. No diretório raiz do projeto, crie um arquivo de variável de ambiente para usar a sua chave de API do Movie Database que te dará acesso aos recursos do site:
```bash
touch .env
```
6. Acesse o arquivo .env criado no passo acima e cole o valor da sua chave gerada no site do Movie Database da seguinte forma:
```javascript
VITE_API_KEY=insira_sua_chave_api_aqui
```
salve o arquivo e pode seguir com o desenvolvimento.
