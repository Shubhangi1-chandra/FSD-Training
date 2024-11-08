document.getElementById('login').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const msg = document.getElementById('msg');
  
    const validUsername = 'Shubhangi-Chandra';
    const validPassword = 'MysticMuse';
  
    if (username === validUsername && password === validPassword) {
      window.location.href = 'test.html'; 
    } else {
      msg.textContent = 'Invalid';
    }
  });
  