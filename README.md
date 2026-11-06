# Vitta

**Projeto:** Vitta
**Solução:** aplicativo web que ajuda pessoas idosas, com pouca familiaridade digital, a entender como acessar serviços públicos (transporte, saúde, INSS, BPC e denúncia de violência).
**Contexto:** Global Solution 2026.2 · FIAP · tema CitizenTech · disciplina Cloud Solutions & Scalable Infrastructure

## Integrantes

| Nome | RM |
|------|----|
| _Ana Larissa Perim da Silva | _RM563742_ |
| _Felipe Kenzo Matsuchita_ | _RM562081_ |
| _Melissa Ferrer Sartor_ | _RM563589_ |

## Descrição da solução

**Problema:** muitos serviços públicos hoje dependem de aplicativos e sites, e pessoas idosas com baixo letramento digital têm dificuldade para saber quais documentos levar, onde ir e como pedir o serviço.

**Solução:** o Vitta apresenta cada serviço em linguagem simples, com lista de documentos, passo a passo numerado, local de atendimento e telefone. O app tem letra ajustável, modo de alto contraste e botão para **ouvir o conteúdo em voz alta**, pensando em quem tem baixa visão ou dificuldade de leitura. O conteúdo fica em `public/services.json`, então novos serviços podem ser adicionados sem mexer no código.

**Aviso:** as informações são orientativas e devem ser confirmadas nos canais oficiais.

## Origem do projeto

- [x] Foi criada pela equipe
- [ ] Foi reutilizada de outra disciplina
- [ ] Foi baseada em um projeto pessoal
- [x] Foi baseada em um projeto do GitHub do professor

## Tecnologias utilizadas

- Node.js 20 (servidor HTTP simples, sem dependências externas)
- HTML, CSS e JavaScript puro (front-end acessível)
- Web Speech API do navegador (leitura em voz alta)
- Azure DevOps (Boards, Repos, Pipelines)
- Azure App Service (Web App Linux)

## Azure DevOps

- **Azure Boards:** 1 User Story e 3 Tasks, com título, descrição, responsável e status (To Do → Doing → Done).
- **Azure Repos:** repositório principal do projeto, com a branch `main` e a branch de trabalho `feature/update-solution`.
- **Azure Pipelines:** o arquivo `azure-pipelines.yml` faz o build (instala, roda `npm test` e gera o zip) e o deploy no Web App.
- **CI/CD:** a cada commit na `main`, o pipeline roda os testes e publica automaticamente a nova versão no Azure Web App.
- **Professor convidado:** `pf2488@fiap.com.br` com nível de acesso Basic.

## Como rodar localmente

```bash
npm test
npm start
# abra http://localhost:8080
```

## Estrutura

```
vitta/
├── azure-pipelines.yml   # pipeline CI/CD
├── package.json
├── server.js             # servidor estático + /health
├── test.js               # testes usados no CI
├── public/
│   ├── index.html        # interface
│   └── services.json     # conteúdo dos serviços
└── docs/                 # textos do Boards e guia de execução
```
