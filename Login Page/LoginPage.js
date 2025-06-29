document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    if (username === 'admin' && password === '1234') {
      alert('Login Successful!');
    } else {
      alert('Invalid username or password.');
    }
  });
});
