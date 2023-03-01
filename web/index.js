const trxRateElement = document.getElementById('trx-rate');

fetch('https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD')
  .then(response => response.json())
  .then(data => {
    const trxRate = data.USD;
    trxRateElement.textContent = `1 TRX = ${trxRate} USD`;
  });
