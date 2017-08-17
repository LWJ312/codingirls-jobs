function allRestoreIsOk() {
    var newPassword=document.getElementById("password1");
    var newPasswordDivP=document.getElementById("PASSWORD").getElementsByTagName("p");
    var passwordAgain=document.getElementById("password2");
    var passwordAgainDiv=document.getElementById("PASSWORDAGA");
    var passwordAgainDivP=document.getElementById("PASSWORDAGA").getElementsByTagName("p");
    var restore=document.getElementById("restore");
    var ok =document.getElementById("ok");
    var vcode=document.getElementById("vcode");
    if (newPassword.value===passwordAgain.value || passwordAgain.value===""){
        if(passwordAgainDivP[0]){
            passwordAgainDiv.removeChild(passwordAgainDivP[0]);
        }
    }
    else if (newPassword.value!==passwordAgain.value &&passwordAgainDivP.length===0){
        passwordAgainDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input!!!</i></small>\n" +
            " </p>"
        ok.checked=false;
    }
    if (newPassword.value!==""&&passwordAgain.value!==""&&vcode.value!=="" &&ok.checked===true&&newPasswordDivP.length===0&&passwordAgainDivP.length===0){
        restore.disabled=false;
    }
    else {
        restore.disabled=true;
    }
}