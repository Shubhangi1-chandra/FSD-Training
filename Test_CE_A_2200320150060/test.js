document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
  
    if (amount === '') {
      alert('Enter Amount');
      return;
    }
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Response Error');
        }
        return response.json();
      })
      .then(data => {
        const rate = data.rates[to];
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('result').textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
      })
      .catch(error => {
        document.getElementById('result').textContent = 'Error: ' + error.message;

      });
  });
  