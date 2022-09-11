// let compras = {
//     arroz: {
//         preco: 4.90,
//         quantidade: 3
//     },
//     feijao: {
//         preco: 6.90,
//         quantidade: 2
//     }
// }

let compras = [2, 2, 4.9, 5.3]

let totaPrecoCompra = compras.reduce(function (item, compras) {
    console.log(item, compras);
    return item + compras;
}, 0)

console.log(`olha o reduce -> ${totaPrecoCompra}`)