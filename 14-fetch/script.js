let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL"




function captaNumber () {
    let input = document.getElementById("numberCap");
    let valor = input.value;
    console.log(valor);

    fetch(url)
    .then((res) => {
        // console.log(res);
        return res.json()
    })
    .then((data) => {
        console.log(data);
        console.log(data.USDBRL.bid);
        let bid = data.USDBRL.bid;

        let resultado = `${valor} dolares = ${(valor * bid).toFixed(2)} em reais`;
        // let resultadoToFixed = parseFloat(resultado).toFixed(2);
        document.querySelector("#result").innerHTML = resultado;

    })
}