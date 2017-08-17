function loginCheckInForget(){
    var email = document.getElementById("email");
    var emailDivP = document.getElementById("emails").getElementsByTagName("p");
    var restore = document.getElementById("restore");
    if (email.value!=="" && emailDivP.length===0){
        restore.disabled=false;
    }
    else restore.disabled=true;
}