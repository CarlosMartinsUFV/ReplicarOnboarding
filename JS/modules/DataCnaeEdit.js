export default class DataCnaeEdit {
  constructor() {
    this.codigo = document.getElementById("codigoEdicaoCnae");
    this.descricao = document.getElementById("descricaoEdicaoCnae");
    this.cadastrar = document.querySelector("#buttonCadastroEditCnae");
    this.date = new Date();
    this.bodyTable = document.querySelector(".bodyTableCNAES");

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
      '<i class="text-white fa-solid fa-edit" style= "background:#ffc107; color: white; border-radius: 50%; padding:8px">';
  }

  handleSubmit(e) {
    e.preventDefault();

    const idModal = document.querySelector(".idModal");

    const bodyTableTags = this.bodyTable.querySelectorAll("tr");

    bodyTableTags.forEach((tag) => {
      if (tag.id === idModal.innerHTML) {
        tag.children[0].innerHTML = this.dateCreate;
        tag.children[1].innerHTML = this.codigo.value;
        tag.children[2].innerHTML = this.descricao.value;
      }
    });
    this.codigo.value = "";
    this.descricao.value = "";
  }

  addEvents() {
    this.cadastrar.addEventListener("click", (e) => this.handleSubmit(e));
  }

  init() {
    if (this.codigo && this.descricao && this.cadastrar) this.addEvents();
  }
}
