  document.getElementById('bt').addEventListener('click', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email-address').value;
    const password = document.getElementById('email-password').value;
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ correo:email, contrasena:password })
    });

  });