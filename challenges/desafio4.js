// Retorne os lanches que tiveram vendas maiores que 50 e menores que 100. Mostre apenas o nome e quantidade de lanches vendidos. Ordene por quantidade de lanches vendidos em ordem crescente.
db.produtos
  .find({ vendidos: { $gt: 50, $lt: 100 } }, { _id: 0, nome: 1, vendidos: 1 })
  .sort({ vendidos: 1 });
