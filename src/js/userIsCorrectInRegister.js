function userIsCorrectInRegister() {
    document.getElementById('userName').blur();
    var userNameFormat=/^[a-zA-Z0-9_]{6,18}$/;
    var userName =document.getElementById("userName");
    var userNameDiv =document.getElementById("user");
    var userNameDivP =document.getElementById("user").getElementsByTagName("p");
     if  (userNameFormat.test(userName.value)||userName.value===""){
         if(userNameDivP[0]){
             userNameDiv.removeChild(userNameDivP[0]);
         }
    }
    else if (userNameFormat.test(userName.value)===false && userNameDivP.length===0){
        userNameDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>User name's format is wrong !!!</i></small>\n" +
            " </p>"
    }

}
