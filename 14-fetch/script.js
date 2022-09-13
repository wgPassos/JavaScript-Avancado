let url = "http://economia.awesomeapi.com.br/json/last/USD-BRL"

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.USDBRL.bid)
    })