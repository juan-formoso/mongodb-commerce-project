// Adicione a quantidade de vendas dos sanduíches por dia da semana.

/* Crie uma query que inclua um campo vendasPorDia em todos os sanduíches. O valor deste campo deverá ser um array com sete posições. Cada uma delas representará um dia da semana, e cada posição iniciará em 0. 

O array deve se parecer como abaixo:
"vendasPorDia": [0, 0, 0, 0, 0, 0, 0]

O primeiro item desse array representa as vendas no domingo, o segundo item representa as vendas na segunda-feira, e assim até chegar ao último item, que representa as vendas no sábado. */
db.produtos.updateMany(
  {},
  {
    $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  },
);

// Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60.
db.produtos.updateMany(
  {
    nome: "Big Mac",
  },
  {
    $set: {
      "vendasPorDia.3": 60,
    },
  },
);

// Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino aos sábados em 120.
db.produtos.updateMany(
  {
    tags: { $in: ["bovino"] },
  },
  {
    $set: {
      "vendasPorDia.6": 120,
    },
  },
);

// Crie uma query que retorne o nome e vendasPorDia de todos os documentos.
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
