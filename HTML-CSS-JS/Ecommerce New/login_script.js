document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateUser();
    
    

    
});

function validateUser(){

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // console.log('Login Form Submitted');
    // console.log('Username:', username);
    // console.log('Password:', password);

    let data=JSON.parse(localStorage.getItem(`${username}`));
    console.log();
    // alert("Username:"+data.username);
    // alert("Password:"+data.password);
    if(data.password==password){
        sessionStorage.setItem("User",JSON.stringify({u:username,p:password}))
        // console.log(sessionStorage.getItem(username))
        window.location.href="index.html";
    }else{
        alert("Wrong Username or Password !!")
    }


}