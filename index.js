import "./style.css";

const materias = ["Redes", "Inglês", "Compiladores", "Sistemas Operacionais"];

const professores = [];
const formulario = document.getElementById("formId");
const formularioDisciplina = document.getElementById("idDisciplina");
const idCartao = document.getElementById("idCard");
const disciplinasDiv = document.getElementById("disciplinas");
const botaoSalvar = document.getElementById("saveId");
const botaoSalvarDis = document.getElementById("saveDis");

disciplinasDiv.innerHTML = materias
  .map(it => {
    return `<option>${it}</option>`;
  })
  .join();

document.getElementById("teacherButton").onclick = () => {
  idCartao.hidden = !idCartao.hidden;
};

let idCount = 0;

botaoSalvarDis.onclick = () => {
  const valor = {
    id: ++idCount
  };

  for (var i = 0; i < formularioDisciplina.elements.length; i++) {
    const item = formularioDisciplina.elements.item(i);
    valor[item.name] = item.value;
  }

  materias.push(valor);
};

botaoSalvar.onclick = () => {
  const valor = {
    id: ++idCount
  };
  for (var i = 0; i < formulario.elements.length; i++) {
    const item = formulario.elements.item(i);
    valor[item.name] = item.value;
  }

  professores.push(valor);
  mostrarTabela();
};

function mostrarTabelaDisciplina() {
    const table = document.getElementById("tabela2");

  if (materias.length === 0) {
    table.innerHTML = "Nenhuma materia cadastrada";
  }

  table.innerHTML = `
    <tr>
    <th>id</th>
    <th>nome</th>
    <th>descricao</th>
  </tr>`;
  table.innerHTML += materias
    .map(it => {
      return `
      <tr>
    <td>${it.id}</td>
    <td>${it.nomeDis}</td>
    <td>${it.descDis}</td>
    </tr>
    `;
    })
    .join();
}

function mostrarTabela() {
  const table = document.getElementById("tabela");

  if (professores.length === 0) {
    table.innerHTML = "Nenhuma aula cadastrada";
  }

  table.innerHTML = `
    <tr>
    <th>id</th>
    <th>EMAIL</th>
    <th>Nome</th>
    <th>Celular</th>
    <th>LOcalização</th>
  </tr>`;
  table.innerHTML += professores
    .map(it => {
      return `
      <tr>
    <td>${it.id}</td>
    <td>${it.email}</td>
    <td>${it.nome}</td>
    <td>${it.celular}</td>
    <td>${it.localizacao}</td>
    </tr>
    `;
    })
    .join();
}
