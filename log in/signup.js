const submitButton = document.getElementById("submit");
submitButton.addEventListener("click" , () => { 
    let nameInput = document.getElementById("name");
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [] ;
    let newAccount = {
        username : usernameInput.value ,
        name : nameInput.value ,
        password : passwordInput.value, 
        type : "user"
    }

    if (nameInput.value == '' || usernameInput.value == '' ||  passwordInput.value == '' || nameInput.type != 'email') {
        window.alert("Error");
    }
    else {
    accounts.push(newAccount);
    localStorage.setItem("accounts",JSON.stringify(accounts));
    window.location.href = "login.html";}
} ) ;
