function emailIsCorrect() {
    document.getElementById('email').blur();
    var email= document.getElementById("email");
    var emailDiv = document.getElementById("emails");
    var emailDivP =document.getElementById("emails").getElementsByTagName("p");
    var emailFormat = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if (emailFormat.test(email.value) || email.value===""){
         if(emailDivP[0]){
             emailDiv.removeChild(emailDivP[0]);
         }
    }
    else if(emailFormat.test(email.value)===false && emailDivP.length===0) {
        emailDiv.innerHTML+="<p style='color: red;'>\n" +
            " <small><i>Email's format is wrong !!!</i></small>\n" +
            " </p>"
    }
}