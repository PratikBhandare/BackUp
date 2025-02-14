document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();


    registerUser();

});



function registerUser() {
   
    
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    console.log('Signup Form Submitted');
    // console.log('Username:', username);
    // console.log('Email:', email);
    // console.log('Password:', password);
    // console.log()'
    let u={ username: username, email: email, password: password };
    let users={}
    users[u.username]=u;
    localStorage.setItem(u.username,JSON.stringify(u));
    alert("User Registered !!")
    // console.log(JSON.parse(localStorage.getItem(`${u.username}`)));
    console.log(JSON.parse(localStorage.getItem(`${u.username}`)).password);
    
    window.location.href = "login.html"
}