export default class DataCnaeSubmit {
  constructor() {
    this.codigo = document.getElementById("codigo");
    this.descricao = document.getElementById("descricao");
    this.cadastrar = document.querySelector("#buttonCadastroCnae");
    this.bodyTableCNAES = document.querySelector(".bodyTableCNAES");
    this.date = new Date();
    this.id = 2;

    this.dateCreate =
      ("0" + this.date.getDate()).slice(-2) +
      "/" +
      ("0" + (1 + this.date.getMonth())).slice(-2) +
      "/" +
      this.date.getFullYear() +
      " " +
      ("0" + this.date.getHours()).slice(-2) +
      ":" +
      "" +
      ("0" + this.date.getMinutes()).slice(-2);

    this.iconeEditar =
      '<i data-modal = "abrirModalEdicaoCnae" class="text-white fa-solid fa-edit iconeTableModal"style= "background:#ffc107; color: white; border-radius: 50%; padding:8px">';
  }

  handleSubmit(e) {
    e.preventDefault();
    this.id = this.id + 1;

    const createRow = document.createElement("tr");

    createRow.id = this.id;

    this.bodyTableCNAES.appendChild(createRow);

    const dataInputs = [
      this.dateCreate,
      this.codigo.value,
      this.descricao.value,
      this.iconeEditar,
    ];

    dataInputs.forEach((valueRows) => {
      const createCell = document.createElement("td");
      createCell.classList.add("cell");
      createCell.innerHTML = valueRows;

      return createRow.appendChild(createCell);
    });

    this.codigo.value = "";
    this.descricao.value = "";
    return this.id;
  }

  addEvents() {
    this.cadastrar.addEventListener("click", (e) => this.handleSubmit(e));
  }

  init() {
    if (this.codigo && this.descricao && this.cadastrar) this.addEvents();

    return this;
  }
}
