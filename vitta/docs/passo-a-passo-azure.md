# Passo a passo no Azure DevOps (tempo-alvo: cerca de 2 horas)

Siga na ordem. Os tempos acompanham o enunciado do professor.

## 0. Antes de começar (5 min)

- Tenha uma conta Microsoft com acesso a uma assinatura do Azure (conta de estudante serve).
- Faça login em https://dev.azure.com. Se não tiver organização, crie uma.

## 1. Azure Boards (15 min) · evidência 01

1. Crie um projeto novo (ex.: `vitta`), visibilidade privada.
2. Em **Boards > Work items**, crie a User Story e as 3 Tasks do arquivo `docs/azure-boards.md`.
3. Preencha título, descrição, responsável e status em todos.
4. Tire print do quadro com os itens.

## 2. Azure Repos (20 min) · evidências 02 e 03

1. Em **Repos > Files**, escolha *Import* ou *Push an existing repository*.
2. No seu computador, na pasta do projeto:

```bash
git init
git checkout -b main
git add .
git commit -m "feat: versao inicial do Vitta"
git remote add origin <URL do repositório do Azure Repos>
git push -u origin main
```

3. Crie a branch de trabalho:

```bash
git checkout -b feature/update-solution
```

4. Tire print da estrutura do repositório e da lista de branches.

## 3. Personalização (20 min)

- Edite `public/services.json` e `public/index.html` (título, textos, cores) para refletir a proposta do grupo.
- Preencha o README com nome(s) e RM(s) de todos.
- Commits pequenos e com mensagens claras valem nota em "Branch e commits":

```bash
git add .
git commit -m "feat: personaliza servicos e visual do Vitta"
git push -u origin feature/update-solution
```

- Abra um **Pull Request** da `feature/update-solution` para a `main` e conclua o merge.

## 4. Criar o Web App no Azure (10 min, pode ser feito antes)

No portal do Azure, **Criar recurso > Web App**:

- Publicar: **Código**
- Pilha de runtime: **Node 20 LTS**
- Sistema operacional: **Linux**
- Plano: B1 ou F1 (o gratuito costuma bastar)
- Anote o **nome do app** (vai no pipeline)

## 5. Azure Pipeline (30 min) · evidências 04 e 05

1. **Pipelines > Create Pipeline > Azure Repos Git** e escolha o repositório.
2. Selecione **Existing Azure Pipelines YAML file** e aponte para `/azure-pipelines.yml` na `main`.
3. Antes de rodar, edite as variáveis `azureSubscription` e `webAppName` (veja abaixo).
4. **Service connection:** em **Project settings > Service connections > New > Azure Resource Manager**, escolha sua assinatura e dê um nome. Esse nome vai em `azureSubscription`.
5. Rode o pipeline e autorize o ambiente `producao` e a conexão se o Azure pedir permissão.
6. Tire print do pipeline configurado e de uma execução com status de sucesso.

### Problemas comuns

- **"No hosted parallelism has been purchased or granted":** organizações novas do Azure DevOps podem não ter agentes gratuitos. Peça o grant gratuito em https://aka.ms/azpipelines-parallelism-request (pode levar alguns dias, então peça logo) ou confirme com o professor a alternativa para a atividade.
- **Erro de permissão na service connection:** abra a execução do pipeline e clique em *Permit* quando aparecer o aviso.
- **Site mostra tela padrão do Azure:** confira se o runtime é Node 20 e se o comando de inicialização é `npm start`.

## 4b. Deploy (10 min) · evidência 06

- Abra a URL do Web App (`https://<nome-do-app>.azurewebsites.net`) e tire print da aplicação funcionando.
- Teste também `/health`.

## 6. Atualização do ambiente (10 min) · evidência 07

1. Faça uma alteração visível simples (ex.: mudar a versão no rodapé de `1.0` para `1.1` em `public/index.html`).
2. Commit, push e Pull Request para a `main`.
3. Veja o pipeline disparar sozinho e terminar com sucesso.
4. Recarregue o site e tire print mostrando a mudança.

## 7. Últimos itens

- Convide `pf2488@fiap.com.br` como **Basic** em **Project settings > Teams/Permissions** (ou **Organization settings > Users**).
- Confira o README (nomes e RMs) e se a aplicação publicada representa o Vitta.
- Entregue pelo Teams, até 23h59 do dia.

## Checklist de evidências

| # | Evidência | Feito |
|---|-----------|-------|
| 01 | Boards: User Story, Tasks, responsáveis e status | ☐ |
| 02 | Repos: repositório, estrutura e branches | ☐ |
| 03 | Histórico de commits | ☐ |
| 04 | Pipeline configurado | ☐ |
| 05 | Execução com sucesso | ☐ |
| 06 | Aplicação publicada | ☐ |
| 07 | Alteração chegando ao ambiente pelo pipeline | ☐ |
