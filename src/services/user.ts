 export interface User {
    id: number;
    name: string;
    cpf: string;
    firstphone: string;
    date: string;
    finishedBy: string;
    reason: string;
}


export const users:User[] = [
    {
      id: 1,
      name: "Ana Silva",
      cpf: "111.111.111-11",
      firstphone: "(11)11111-1111",
      date: "05/03/2024",
      finishedBy: "Carlos Santos",
      reason: "Troca de Plano",
    },
    {
      id: 2,
      name: "Pedro Almeida",
      cpf: "222.222.222-22",
      firstphone: "(22)22222-2222",
      date: "10/03/2024",
      finishedBy: "Fernanda Oliveira",
      reason: "Cancelamento",
    },
    {
      id: 3,
      name: "Lucas Pereira",
      cpf: "333.333.333-33",
      firstphone: "(33)33333-3333",
      date: "15/03/2024",
      finishedBy: "Gabriel Silva",
      reason: "Alteração de Endereço",
    },
    {
      id: 4,
      name: "Mariana Santos",
      cpf: "444.444.444-44",
      firstphone: "(44)44444-4444",
      date: "20/03/2024",
      finishedBy: "Rafaela Santos",
      reason: "Dúvidas sobre Cobrança",
    },
    {
      id: 5,
      name: "Carlos Oliveira",
      cpf: "555.555.555-55",
      firstphone: "(55)55555-5555",
      date: "25/03/2024",
      finishedBy: "Marcos Almeida",
      reason: "Problemas com Acesso ao Site",
    },
    {
      id: 6,
      name: "Fernanda Souza",
      cpf: "666.666.666-66",
      firstphone: "(66)66666-6666",
      date: "01/04/2024",
      finishedBy: "Patrícia Lima",
      reason: "Solicitação de Informações",
    },
    {
      id: 7,
      name: "Roberto Santos",
      cpf: "777.777.777-77",
      firstphone: "(77)77777-7777",
      date: "05/04/2024",
      finishedBy: "José Oliveira",
      reason: "Reclamação sobre Produto",
    },
    {
      id: 8,
      name: "Carolina Lima",
      cpf: "888.888.888-88",
      firstphone: "(88)88888-8888",
      date: "10/04/2024",
      finishedBy: "Juliana Costa",
      reason: "Assistência Técnica",
    },
    {
      id: 9,
      name: "Gabriel Oliveira",
      cpf: "999.999.999-99",
      firstphone: "(99)99999-9999",
      date: "15/04/2024",
      finishedBy: "Fernanda Pereira",
      reason: "Problemas com Entrega",
    },
    {
      id: 10,
      name: "Isabela Silva",
      cpf: "123.456.789-00",
      firstphone: "(00)12345-6789",
      date: "20/04/2024",
      finishedBy: "Mateus Costa",
      reason: "Troca de Produto",
    }
];
