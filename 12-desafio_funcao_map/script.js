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
        item.preco += 10
    return document.write(`o ${item.nome} aumentou, o preco é ${item.preco}`);
} else {
    return document.write(`o ${item.nome} é o mesmo ${item.preco}<br>`);
}
})

console.log(mapProcura)