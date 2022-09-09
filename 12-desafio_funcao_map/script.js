let produtos = [ {
    nome: "mouse",
    preco: 90,
    componente: "hardware"
},
{
nome: "caixa",
preco: 50,
componente: "hardware"
}
]

let mapProcura = produtos.map(function(item) {
    if (item.preco < 80) {
    return item.preco += 10;
} else {
    return item.preco
}
})

console.log(mapProcura)