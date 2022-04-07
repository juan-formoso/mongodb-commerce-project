// Ordene a coleção produtos pela quantidade de lanches vendidos em ordem crescente e mostre apenas o nome e quantidade de lanches vendidos.
db.produtos.find({}, { _id: 0, nome: 1, vendidos: 1 }).sort({ vendidos: 1 });
