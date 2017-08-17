function passwordIsCorrect() {
    document.getElementById('password').blur();
    var password =document.getElementById("password");
    var passwordDiv =document.getElementById("passwordLogin");
    var passwordDivP =document.getElementById("passwordLogin").getElementsByTagName("p");
    var passwordFormat=/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    if (passwordFormat.test(password.value) || password.value===""){
        if(passwordDivP[0]){
            passwordDiv.removeChild(passwordDivP[0]);
        }
    }
    else if(passwordFormat.test(password.value)===false && passwordDivP.length===0) {
        passwordDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong !!!</i></small>\n" +
            " </p>"
    }

}