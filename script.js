let allUsers = [];

// Initialize allUsers with data from localStorage if it exists
let users = localStorage.getItem('users');
if (users) {
    allUsers = JSON.parse(users);
}

function signup() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let user = {
        email: email.value,
        password: password.value 
    }



    allUsers.push(user);
    localStorage.setItem('users', JSON.stringify(allUsers));
    alert("Signup successful");
}

function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let filterUser = allUsers.filter(data => data.email === email.value && data.password === password.value);

    if (filterUser.length) {
        alert("User login successful");
    } else {
        alert("Email/password incorrect");
    }
}
