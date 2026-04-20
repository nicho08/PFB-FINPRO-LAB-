const form = document.querySelector('.Login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const Email = document.getElementById('Email').value.trim()
    const password = document.getElementById('password').value.trim()

    if (Email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }
    else if (password.length < 8){
        alert('password must at least be 8 characters long')
    }
})