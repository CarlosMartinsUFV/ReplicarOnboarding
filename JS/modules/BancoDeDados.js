const usuarios = [
  {
    criadoem: "19/01/2021",
    nome: "ENGEDE SOLUCOES TECNICAS LTDA",
    responsavel: "TAMIRES",
    contato: "31 9 84918338",
    status: "Em Cadastro",
    timeResponsavel: "Equipe Onboarding",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "22/01/2021",
    nome: "BEM PRESTACAO DE SERVICOS MEDICOS LTDA",
    responsavel: "TAMIRES",
    contato: "31 9 84918338",
    status: "Em abertura Manual",
    timeResponsavel: "Equipe Abertura",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "23/01/2021",
    nome: "MICHEL FREITAS - SOCIEDADE INDIVIDUAL DE ADVOCACIA",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Em Cadastro",
    timeResponsavel: "Equipe Abertura",
    tipoOnboarding: "MIGRAÇÃO",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "23/01/2021",
    nome: "NATHAN RIBEIRO PSIQUIATRIA",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Em Cadastro",
    timeResponsavel: "Equipe Abertura",
    tipoOnboarding: "MIGRAÇÃO",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "23/01/2021",
    nome: "TERAPIA COM CIENCIA PSICOLOGIA LTDA",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "MIGRAÇÃO",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "23/01/2021",
    nome: "IBAM SERVICOS MEDICOS LTDA",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "23/01/2021",
    nome: "TAMIRES",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Em onboarding",
    timeResponsavel: "Em onboarding",
    tipoOnboarding: "MIGRAÇÃO",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "23/01/2021",
    nome: "TAMIRES",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Em onboarding",
    timeResponsavel: "Em onboarding",
    tipoOnboarding: "MIGRAÇÃO",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "22/03/2021",
    nome: "EMPRESA TESTE1",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE1",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "03/05/2021",
    nome: " REGINA REGINA REGINA REGINA REGINA REGINA REGINA REGINA A",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE1",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE2",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE3",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE4",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE5",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE6",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "REGINA",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE 7",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE8",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE9",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE10",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE11",
    responsavel: "LARA",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE12",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Finalizado abertura manual",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE13",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Finalizado migração",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE1",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Finalizado migração",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE1",
    responsavel: "CARLOS",
    contato: "31 9 84918338",
    status: "Finalizado migração",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE1",
    responsavel: "TAMIRES",
    contato: "31 9 84918338",
    status: "Finalizado migração",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE1",
    responsavel: "TAMIRES",
    contato: "31 9 84918338",
    status: "Finalizado migração",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
  {
    criadoem: "21/04/2021",
    nome: "EMPRESA TESTE1",
    responsavel: "TAMIRES",
    contato: "31 9 84918338",
    status: "Finalizado migração",
    timeResponsavel: "Finalizado",
    tipoOnboarding: "ABERTURA",
    icones:
      '<button title = "Vizualizar" class="iconesTable" style="background:#396600"><i class="fa-solid fa-eye text-white"></i></button><button title = "Editar como cliente" class="iconesTable" style="background:#5a5b5c"><i class="fa-solid fa-pencil text-white"></button></i><button title = "Editar número de sócios" class= "iconesTable" style="background:#0e4f82"><i class="fa-solid fa-user"></i></button>',
  },
];

const bodyTable = document.querySelector(".bodyTable");

const sum = 1;
const indexRowLimite1 = 1;
const indexRowLimite2 = 10;

export { usuarios, bodyTable, sum, indexRowLimite1, indexRowLimite2 };
