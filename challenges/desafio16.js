// Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac.

db.produtos.updateOne(
  {
    nome: "Big Mac",
  },
  {
    $set: {
      ultimaModificacao: new Date(),
    },
  },
);

// Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.
db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });
