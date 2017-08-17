function passwordIsCorrect() {
    document.getElementById("password1").blur();
    var passwordFormat =/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    var newPassword = document.getElementById("password1");
    var newPasswordDiv = document.getElementById("PASSWORD");
    var newPasswordDivP = document.getElementById("PASSWORD").getElementsByTagName("p");
    document.getElementById("checkInRes").checked=false;
    if (passwordFormat.test(newPassword.value)||newPassword.value===""){
        if(newPasswordDivP[0]){
            newPasswordDiv.removeChild(newPasswordDivP[0]);
        }
    }
    else if (passwordFormat.test(newPassword.value)===false&& newPasswordDivP.length===0){
        newPasswordDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong !!!</i></small>\n" +
            " </p>"
    }
}