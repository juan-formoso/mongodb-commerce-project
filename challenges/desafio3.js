// Retorne o lanche mais vendido e mostre apenas o nome e a quantidade de lanches vendidos.
db.produtos
  .find({}, { _id: 0, nome: 1, vendidos: 1 })
  .sort({ vendidos: -1 })
  .limit(1);
