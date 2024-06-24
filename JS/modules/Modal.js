class Modal {
  constructor() {
    // bind this ao callback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
    this.bodyTable = document.querySelector(".bodyTableCNAES");
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }
}

export class ModalAddCnae extends Modal {
  constructor(botaoAbrir, botaoFechar, containerModal, cadastrar) {
    super();
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.cadastrar = document.querySelector(cadastrar);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal({ target }) {
    if (target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalAddEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.cadastrar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.cadastrar && this.botaoFechar && this.containerModal) {
      this.addModalAddEvents();
    }
  }
}

export class ModalEdicaoCnae extends Modal {
  constructor(
    editarCnae,
    botaoFecharEditarCnae,
    containerModalEditarCnae,
    cadastrarCnaeEditado
  ) {
    super();
    this.editarCnae = document.querySelectorAll(editarCnae);
    this.botaoFecharEditarCnae = document.querySelector(botaoFecharEditarCnae);
    this.containerModalEditarCnae = document.querySelector(
      containerModalEditarCnae
    );
    this.cadastrarCnaeEditado = document.querySelector(cadastrarCnaeEditado);
  }

  toggleModal() {
    this.containerModalEditarCnae.classList.toggle("ativo");
  }

  cliqueForaModal({ target }) {
    if (target === this.containerModalEditarCnae) {
      this.toggleModal();
    }
  }

  adicionarIDModal(target) {
    const idModal = document.querySelector(".idModal");
    idModal.innerHTML = target.parentElement.parentElement.id;
  }

  editarCnarModalEvents() {
    const table = document.querySelector("#tableCNAES");

    table.addEventListener("click", ({ target }) => {
      if (target.className.includes("iconeTableModal")) {
        this.eventToggleModal(event);
        this.adicionarIDModal(target);
      }
    });

    this.botaoFecharEditarCnae.addEventListener("click", this.eventToggleModal);

    this.containerModalEditarCnae.addEventListener(
      "click",
      this.cliqueForaModal
    );
    this.cadastrarCnaeEditado.addEventListener("click", this.eventToggleModal);
  }
  init() {
    if (
      this.editarCnae &&
      this.botaoFecharEditarCnae &&
      this.containerModalEditarCnae
    ) {
      this.editarCnarModalEvents();
    }
    return this;
  }
}
