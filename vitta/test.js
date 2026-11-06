// Testes simples usados na etapa de CI do Azure Pipeline.
// Se qualquer verificacao falhar, o processo termina com codigo 1 e o pipeline falha.
const fs = require('fs');
const path = require('path');

let erros = 0;
function verificar(condicao, mensagem) {
  if (condicao) {
    console.log('OK   - ' + mensagem);
  } else {
    console.error('FALHA - ' + mensagem);
    erros++;
  }
}

const pub = path.join(__dirname, 'public');

verificar(fs.existsSync(path.join(pub, 'index.html')), 'public/index.html existe');
verificar(fs.existsSync(path.join(__dirname, 'server.js')), 'server.js existe');

let servicos = [];
try {
  servicos = JSON.parse(fs.readFileSync(path.join(pub, 'services.json'), 'utf8'));
  verificar(true, 'services.json e um JSON valido');
} catch (e) {
  verificar(false, 'services.json e um JSON valido (' + e.message + ')');
}

verificar(Array.isArray(servicos) && servicos.length >= 3, 'ha pelo menos 3 servicos cadastrados');

const ids = new Set();
servicos.forEach(function (s, i) {
  const rotulo = 'servico #' + (i + 1) + ' (' + (s.id || 'sem id') + ')';
  verificar(Boolean(s.id && s.titulo && s.resumo), rotulo + ' tem id, titulo e resumo');
  verificar(Array.isArray(s.documentos) && s.documentos.length > 0, rotulo + ' lista documentos');
  verificar(Array.isArray(s.passos) && s.passos.length > 0, rotulo + ' lista passos');
  verificar(Boolean(s.onde && s.telefone), rotulo + ' informa onde ir e telefone');
  verificar(!ids.has(s.id), rotulo + ' tem id unico');
  ids.add(s.id);
});

if (erros > 0) {
  console.error('\n' + erros + ' verificacao(oes) falharam.');
  process.exit(1);
}
console.log('\nTodos os testes passaram.');
