const username = document.getElementById('username'),
    password = document.getElementById('password'),
    btnSubmit = document.getElementById('btnsubmit');


// Form interaction with User
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const userinfo = username.value.trim(),
        pass = password.value.trim();
    if ((userinfo === 'user') && (pass === '123')) {
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1500);
    } else {
        alert('Username or Password Incorrect');
    }
}); 
