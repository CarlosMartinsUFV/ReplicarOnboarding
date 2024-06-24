export default class Paginacao {
  constructor(bodyTable, indexRowLimite1, indexRowLimite2) {
    this.anterior = document.querySelector("#anterior");
    this.proxima = document.querySelector("#proxima");
    this.paginas = document.querySelectorAll(".pagina");
    this.atual = document.querySelector("#atual");
    this.contar = 1;
    this.sumindexRowLimite1;
    this.sumindexRowLimite2;
    this.indexRowLimite1 = indexRowLimite1;
    this.indexRowLimite2 = indexRowLimite2;

    this.bodyTable = bodyTable;
    this.alterarNumero = this.alterarNumero.bind(this);
    this.movimentarPagina = this.movimentarPagina.bind(this);
  }
  alterarNumero({ target }) {
    if (target.innerText === "P") {
      this.contar++;
      this.atual.innerText = this.contar;
    } else if (this.contar > 1 && target.innerText === "A") {
      this.contar--;
      this.atual.innerText = this.contar;
    }
  }

  movimentarPagina({ target }) {
    const bodyTableTags = this.bodyTable.querySelectorAll("tr");

    this.contar < 2 ? this.anterior.setAttribute("disabled", true) : null;

    if (target.innerText === "P") {
      this.sumindexRowLimite1 = this.indexRowLimite1 + (this.contar - 1) * 10;
      this.sumindexRowLimite2 = this.indexRowLimite2 + (this.contar - 1) * 10;
      this.anterior.removeAttribute("disabled");
    } else if (target.innerText === "A" && atual.innerText >= "1") {
      this.proxima.removeAttribute("disabled");
      this.sumindexRowLimite1 = this.sumindexRowLimite1 - 10;
      this.sumindexRowLimite2 = this.sumindexRowLimite2 - 10;
    }

    bodyTableTags.forEach((tag) => {
      tag.style.display = "none";

      tag.getAttribute("aria-rowindex") >= this.sumindexRowLimite1 &&
      tag.getAttribute("aria-rowindex") <= this.sumindexRowLimite2
        ? (tag.style.display = "")
        : null;
    });

    this.bodyTable.lastChild.style.display == ""
      ? proxima.setAttribute("disabled", true)
      : null;
  }

  addEvents() {
    this.paginas.forEach((page) => {
      page.addEventListener("click", this.alterarNumero);
      page.addEventListener("click", this.movimentarPagina);
    });
  }

  init() {
    if (this.paginas) this.addEvents();
  }
}
