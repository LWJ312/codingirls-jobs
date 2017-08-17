function allRegisterIsOk() {
    var userName =document.getElementById("userName");
    var userNameDivP =document.getElementById("user").getElementsByTagName("p");
    var email =document.getElementById("email");
    var emailDivP =document.getElementById("emails").getElementsByTagName("p");
    var password = document.getElementById("password1");
    var passwordDivP = document.getElementById("PASSWORD").getElementsByTagName("p");
    var passwordAgain = document.getElementById("password2");
    var passwordAgainDiv = document.getElementById("PASSWORDAGA");
    var passwordAgainDivP = document.getElementById("PASSWORDAGA").getElementsByTagName("p");
    var signUp=document.getElementById("signup");
    var checkBox =document.getElementById("checkInRes");
    if (password.value===passwordAgain.value || passwordAgain.value===""){
        if(passwordAgainDivP[0]){
            passwordAgainDiv.removeChild(passwordAgainDivP[0]);
        }
    }
    else if (password.value!==passwordAgain.value &&passwordAgainDivP.length===0){
        passwordAgainDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input !!!</i></small>\n" +
            " </p>"
        checkBox.checked=false;
    }
    if (checkBox.checked===true&&userNameDivP.length===0&&emailDivP.length===0&&passwordDivP.length===0&&passwordAgainDivP.length===0&&userName.value!==""&&email.value!==""&&password.value!==""&&passwordAgain.value!==""){
        signUp.disabled=false;
    }
    else {
        signUp.disabled=true;
    }

}