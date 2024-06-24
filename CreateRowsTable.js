import {
  usuarios,
  bodyTable,
  sum,
  indexRowLimite1,
  indexRowLimite2,
} from "./JS/modules/BancoDeDados.js";

class RowAdd {
  constructor(usuarios, bodyTable, sum, indexRowLimite1, indexRowLimite2) {
    this.usuarios = usuarios;
    this.bodyTable = bodyTable;
    this.sum = sum;
    this.indexRowLimite1 = indexRowLimite1;
    this.indexRowLimite2 = indexRowLimite2;
    this.createRow;
  }
  createRows() {
    this.usuarios.map((obj) => {
      this.createRow = document.createElement("tr");
      const objArray = Object.values(obj);
      this.bodyTable.appendChild(this.createRow);

      objArray.map((value) => {
        let createCell = document.createElement("td");
        createCell.classList.add("cell");
        createCell.innerHTML = value;
        this.createRow.appendChild(createCell);
      });
    });
  }

  setarAtributo() {
    const bodyTableTags = this.bodyTable.querySelectorAll("tr");

    bodyTableTags.forEach((tag) => {
      tag.style.display = "none";

      tag.setAttribute("aria-rowindex", this.sum++);

      if (
        tag.getAttribute("aria-rowindex") >= this.indexRowLimite1 &&
        tag.getAttribute("aria-rowindex") <= this.indexRowLimite2
      )
        tag.style.display = "";
    });
  }
  init() {
    this.createRows();
    this.setarAtributo();
  }
}

const rowAdd = new RowAdd(
  usuarios,
  bodyTable,
  sum,
  indexRowLimite1,
  indexRowLimite2
);
rowAdd.init();
