export default class ModalEdicaoCnae {
  constructor(editarCnae, botaoFechar, containerModal, cadastrar) {
    this.editarCnae = document.querySelectorAll(editarCnae);
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
    console.log(this.editarCnae);
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal({ target }) {
    if (target === this.containerModal) {
      this.toggleModal();
      console.log(this.editarCnae);
    }
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

// function showModalEdicaoCnae() {
//   const editarCnae = document.querySelector(
//     '[data-modal="abrirModalEdicaoCnae"]'
//   );

//   console.log(editarCnae);
//   const botaoFechar = document.querySelector(
//     '[data-modal="fecharModalEdicaoCnae"]'
//   );
//   const containerModal = document.querySelector(
//     '[data-modal="containerModalEdicaoCnae"]'
//   );
//   const cadastrar = document.querySelector(
//     '[data-modal="cadastrarModalEdicaoCnae"]'
//   );

//   // bind this ao callback para
//   // fazer referência ao objeto
//   // da classe
//   //  eventToggleModal =eventToggleModal.bind(this);
//   //  cliqueForaModal =cliqueForaModal.bind(this);
// }
// // abre ou fecha o modal
// function toggleModal() {
//   containerModal.classList.toggle("ativo");
// }

// // adiciona o evento de toggle ao modal
// function eventToggleModal(event) {
//   event.preventDefault();
//   toggleModal();
// }

// // fecha o modal ao clicar do lado de fora
// function cliqueForaModal({ target }) {
//   if (target === containerModal) {
//     toggleModal();
//   }
// }

// // adiciona os eventos aos elementos do modal
// function addModalEvents() {
//   editarCnae.forEach((e) => {
//     e.addEventListener("click", eventToggleModal);
//   });

//   botaoFechar.addEventListener("click", eventToggleModal);
//   cadastrar.addEventListener("click", eventToggleModal);
//   containerModal.addEventListener("click", cliqueForaModal);
// }
