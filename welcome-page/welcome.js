//Al presionar register/login se activa el display de
//las interfaces de login y register
const loginButton = document.getElementById('login-btn');
const registerButton = document.getElementById('register-btn');

const loginPanel = document.getElementById('login-panel');
const registerPanel = document.getElementById('register-panel');

loginButton.addEventListener('click', () => {
    loginPanel.style.display = 'block';
    registerPanel.style.display = 'none';
});

registerButton.addEventListener('click', () => {
    registerPanel.style.display = 'block';
    loginPanel.style.display = 'none';
});


//Al hacer click en los botones de cerrar= display=none;
const closeLoginFormButton = document.getElementById('close-login-form');
const closeRegisterFormButton = document.getElementById('close-register-form');

closeLoginFormButton.addEventListener('click', () => {
    loginPanel.style.display = 'none';
});

closeRegisterFormButton.addEventListener('click', () => {
    registerPanel.style.display = 'none';
});
