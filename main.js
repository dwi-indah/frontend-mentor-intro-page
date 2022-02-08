const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
});

function submitForm() {
    const emailVal = email.value;
    const firstNameVal = firstName.value.trim()
    const lastNameVal = lastName.value.trim();
    const passwordVal = password.value.trim();

    if(firstNameVal === '') {
        document.getElementById('first-img').classList.remove('hidden');
        document.getElementById('first-warning').classList.remove('hidden');
        firstName.classList.remove('border-primary-100');
        firstName.classList.add('border-primary-200');
    } else {
        document.getElementById('first-img').classList.add('hidden');
        document.getElementById('first-warning').classList.add('hidden');
        firstName.classList.add('border-primary-100');
        firstName.classList.remove('border-primary-200');
    }

    if(lastNameVal === '') {
        document.getElementById('last-img').classList.remove('hidden');
        document.getElementById('last-warning').classList.remove('hidden');
        lastName.classList.remove('border-primary-100');
        lastName.classList.add('border-primary-200');
    } else {
        document.getElementById('last-img').classList.add('hidden');
        document.getElementById('last-warning').classList.add('hidden');
        lastName.classList.add('border-primary-100');
        lastName.classList.remove('border-primary-200');
    }

    if(!validateEmail(emailVal)) {
        document.getElementById('email-img').classList.remove('hidden');
        document.getElementById('email-warning').classList.remove('hidden');
        email.classList.remove('border-primary-100');
        email.classList.add('border-primary-200');
    } else {
        document.getElementById('email-img').classList.add('hidden');
        document.getElementById('email-warning').classList.add('hidden');
        email.classList.add('border-primary-100');
        email.classList.remove('border-primary-200');
    }

    if(passwordVal === '') {
        document.getElementById('pass-img').classList.remove('hidden');
        document.getElementById('pass-warning').classList.remove('hidden');
        password.classList.remove('border-primary-100');
        password.classList.add('border-primary-200');
    } else {
        document.getElementById('pass-img').classList.add('hidden');
        document.getElementById('pass-warning').classList.add('hidden');
        password.classList.add('border-primary-100');
        password.classList.remove('border-primary-200');
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}