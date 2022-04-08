// Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos.

// Crie uma query que insira na coleção "resumoProdutos" um documento com os campos: "franquia":"McDonalds" e "totalProdutos". O valor de totalProdutos deve ser a quantidade de produtos registrados na coleção produtos.
db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.count(),
});

// Em uma segunda query, retorne a "franquia" e o totalProdutos do primeiro documento presente na coleção resumoProdutos em que a "franquia" seja McDonalds.
db.resumoProdutos.find(
  { franquia: "McDonalds" },
  { _id: 0, franquia: 1, totalProdutos: 1 },
);
