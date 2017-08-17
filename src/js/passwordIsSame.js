function passwordIsSame() {
    document.getElementById("password2").blur();
    var newPassword = document.getElementById("password1");
    var passwordAgain = document.getElementById("password2");
    var passwordAgainDiv = document.getElementById("PASSWORDAGA");
    var passwordAgainDivP = document.getElementById("PASSWORDAGA").getElementsByTagName("p");
    document.getElementById("checkInRes").checked=false;
    if (newPassword.value===passwordAgain.value||passwordAgain.value===""){
        if(passwordAgainDivP[0]){
            passwordAgainDiv.removeChild(passwordAgainDivP[0]);
        }
    }
    else if  (newPassword.value !== passwordAgain.value&&passwordAgainDivP.length===0){
        passwordAgainDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input !!!</i></small>\n" +
            " </p>"
    }
}