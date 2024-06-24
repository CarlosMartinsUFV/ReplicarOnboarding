export default class FiltrarValores {
  constructor(bodyTable, indexRowLimite1, indexRowLimite2) {
    this.bodyTable = bodyTable;
    this.inputPesquisar = document.querySelector(".pesquisarEmpresa");
    this.buttonFiltrar = document.querySelector("#buttonFiltrar");
    this.filtroEquipe = document.querySelector("#filtroEquipe");
    this.filtroStatus = document.querySelector("#filtroStatus");
    this.filtroTipoOnboarding = document.querySelector("#tipoOnboarding");
    this.dadosFiltro = {
      criadoem: "",
      nome: "",
      responsavel: "",
      contato: "",
      status: "",
      timeResponsavel: "",
      tipoOnboarding: "",
    };
    this.indexRowLimite1 = indexRowLimite1;
    this.indexRowLimite2 = indexRowLimite2;

    this.searchCompany = this.searchCompany.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  searchCompany() {
    const bodyTableTags = this.bodyTable.querySelectorAll("tr");

    let textInput = this.inputPesquisar.value.toLocaleLowerCase();
    bodyTableTags.forEach((tag) => {
      tag.style.display = "none";
      if (
        tag.children[1].innerText.toLocaleLowerCase().includes(textInput) &&
        textInput.length >= 3
      ) {
        tag.style.display = "";
      } else if (textInput.length <= 2) {
        this.resetarFiltro();
      }
    });
  }

  setFilter() {
    let { tipoOnboarding, status, timeResponsavel } = this.dadosFiltro;

    tipoOnboarding = this.filtroTipoOnboarding.value.toUpperCase();
    status = this.filtroStatus.value.toUpperCase();
    timeResponsavel = this.filtroEquipe.value.toUpperCase();
    this.getValues(tipoOnboarding, status, timeResponsavel);
  }

  getValues(tipoOnboarding, status, timeResponsavel) {
    const bodyTableTags = this.bodyTable.querySelectorAll("tr");

    bodyTableTags.forEach((tag) => {
      tag.style.display = "none";

      tag.children[4].innerText.toUpperCase().includes(status) &&
      tag.children[5].innerText.toUpperCase().includes(timeResponsavel) &&
      tag.children[6].innerText.toUpperCase().includes(tipoOnboarding)
        ? (tag.style.display = "")
        : null;
    });

    if (!tipoOnboarding && !status & !timeResponsavel) this.resetarFiltro();
  }

  resetarFiltro() {
    const bodyTableTags = this.bodyTable.querySelectorAll("tr");

    bodyTableTags.forEach((tag) => {
      tag.style.display = "none";
      if (
        tag.getAttribute("aria-rowindex") >= this.indexRowLimite1 &&
        tag.getAttribute("aria-rowindex") <= this.indexRowLimite2
      )
        tag.style.display = "";
    });
  }

  addEvents() {
    this.inputPesquisar.addEventListener("keyup", this.searchCompany);
    this.buttonFiltrar.addEventListener("click", this.setFilter);
  }
  init() {
    if (this.inputPesquisar && this.buttonFiltrar) this.addEvents();
  }
}
