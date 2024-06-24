export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal, cadastrar) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.cadastrar = document.querySelector(cadastrar);
    // bind this ao callback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal({ target }) {
    if (target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.cadastrar.addEventListener("click", this.eventToggleModal);

    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}

export class ModalEdicaoCnae extends Modal {
  constructor(editarCnae, botaoFechar, containerModal, cadastrar) {
    super(botaoFechar, containerModal, cadastrar);

    this.editarCnae = document.querySelectorAll(editarCnae);

    // bind this ao callback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.editarCnae.forEach((e) => {
      e.addEventListener("click", this.eventToggleModal);
    });

    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.cadastrar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.editarCnae && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
