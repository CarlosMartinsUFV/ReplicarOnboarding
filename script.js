import FiltrarValores from "./JS/modules/FiltrosTabelas.js";
import {
  bodyTable,
  indexRowLimite1,
  indexRowLimite2,
} from "./JS/modules/BancoDeDados.js";
import Paginacao from "./JS/modules/Paginacao.js";
// import Modal from "./JS/modules/Modal.js";
// import ModalEdicaoCnae from "./cnaesPage/ModalEdicaoCnae.js";
import DataCnaeSubmit from "./JS/modules/DataCnaeSubmit.js";
import DataCnaeEdit from "./JS/modules/DataCnaeEdit.js";
import { ModalAddCnae, ModalEdicaoCnae } from "./JS/modules/Modal.js";

const filtrarValores = new FiltrarValores(
  bodyTable,
  indexRowLimite1,
  indexRowLimite2
);
filtrarValores.init();

const paginacao = new Paginacao(bodyTable, indexRowLimite1, indexRowLimite2);
paginacao.init();

const dataCnaeSubmit = new DataCnaeSubmit();
dataCnaeSubmit.init();

const modalAddCnae = new ModalAddCnae(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
  '[data-modal="cadastrar"]'
);
modalAddCnae.init();

const modalEdicaoCnae = new ModalEdicaoCnae(
  '[data-modal="abrirModalEdicaoCnae"]',
  '[data-modal="fecharModalEdicaoCnae"]',
  '[data-modal="containerModalEdicaoCnae"]',
  '[data-modal="cadastrarModalEdicaoCnae"]'
);
modalEdicaoCnae.init();

const dataCnaeEdit = new DataCnaeEdit();
dataCnaeEdit.init();
