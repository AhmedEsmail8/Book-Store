const submitButton = document.getElementById("submit") ;
const accounts = JSON.parse(localStorage.getItem("accounts")) || [] ; 

submitButton.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let found = false;

    if (username == "admin" && password == 1234) {
        window.location.href = "../html/admin.html"
        found=true;
    }
    else {
    for (let i =0; i < accounts.length ; i++ ) {
        if (accounts[i].username == username) {
            found = true;
            if (accounts[i].password == password) {
                localStorage.setItem("currrntUser", JSON.stringify(accounts[i])) ;
                // if (username == "admin" && password=="1234"){
                //     window.location.href = "/admin.html"
                if(accounts[i].type == "user") {
                    // window.location.href = "/admin.html"
                    window.location.href = "../html/home.html"
                }
                break;
            }else {
                alert("password or username is wrong")
                break;
            }
        }
    }}
    if (!found || (username == '' && password == '')){
        alert("account not found");
        window.location.href = "../log in/login.html"
    }
});

