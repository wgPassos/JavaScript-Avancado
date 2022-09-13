let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL"




function captaNumber () {
    let input = document.getElementById("numberCap");
    let numberValue = input.value;
    console.log(numberValue)

    fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.USDBRL.bid);
        let bid = data.USDBRL.bid;

        let resultado = `${numberValue} dolares = ${numberValue * bid} em reais`;
        document.querySelector("#result").innerHTML = resultado;

    })
}