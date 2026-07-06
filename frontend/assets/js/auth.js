document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Demo login logic
  if ((username === 'admin@zagol.com' || username === 'admin') && password === 'admin123') {
    // Save login state
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', username);

    alert('Login successful! Welcome to Zagol Reconciliation System.');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials. Try: admin@zagol.com / admin123');
  }
});

// Auto-focus username
window.onload = () => {
  document.getElementById('username').focus();
};