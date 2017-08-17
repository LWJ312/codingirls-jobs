function confirmation() {
    document.getElementById("InputNewPassword2").blur();
    var newPassword =document.getElementById("InputNewPassword");
    var passwordAgain =document.getElementById("InputNewPassword2");
    var passwordAgainDiv =document.getElementById("newPassword2");
    var passwordAgainDivP=document.getElementById("newPassword2").getElementsByTagName("p");
    var checkBox = document.getElementById("passwordOK");
    checkBox.checked=false;
    if (newPassword.value===passwordAgain.value||passwordAgain.value===""){
        if(passwordAgainDivP[0]){
            passwordAgainDiv.removeChild(passwordAgainDivP[0]);
        }

    }
    else if  (newPassword.value !== passwordAgain.value&&passwordAgainDivP.length===0){
        passwordAgainDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input!!!</i></small>\n" +
            " </p>"
    }
}
function passwordIsCorrect1() {
    document.getElementById("InputCurrentPassword").blur();
    var passwordFormat =/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    var currentPassword = document.getElementById("InputCurrentPassword");
    var oldPasswordDiv = document.getElementById("oldpassword");
    var oldPasswordDivP = document.getElementById("oldpassword").getElementsByTagName("p");
    if (passwordFormat.test(currentPassword.value)||currentPassword.value===""){
        if(oldPasswordDivP[0]){
            oldPasswordDiv.removeChild(oldPasswordDivP[0]);
        }
    }
    else if (passwordFormat.test(currentPassword.value)===false&& oldPasswordDivP.length===0){
        oldPasswordDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong!!!</i></small>\n" +
            " </p>"
    }
}
function passwordIsCorrect2() {
    document.getElementById("InputNewPassword").blur();
    var passwordFormat =/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    var newPassword = document.getElementById("InputNewPassword");
    var newPasswordDiv = document.getElementById("newPassword");
    var newPasswordDivP = document.getElementById("newPassword").getElementsByTagName("p");
    var checkBox = document.getElementById("passwordOK");
    checkBox.checked=false;
    if (passwordFormat.test(newPassword.value)||newPassword.value===""){
        if(newPasswordDivP[0]){
            newPasswordDiv.removeChild(newPasswordDivP[0]);
        }
    }
    else if (passwordFormat.test(newPassword.value)===false&& newPasswordDivP.length===0){
        newPasswordDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong!!!</i></small>\n" +
            " </p>"
    }

}
function finalJudge(){
    var newPassword =document.getElementById("InputNewPassword");
    var currentPassword =document.getElementById("InputCurrentPassword");
    var oldPasswordDivP =document.getElementById("oldpassword").getElementsByTagName("p");
    var newPasswordDiv = document.getElementById("newPassword");
    var newPasswordDivP = document.getElementById("newPassword").getElementsByTagName("p");
    var checkBox = document.getElementById("passwordOK");
    var passwordAgain=document.getElementById("InputNewPassword2");
    var passwordAgainDiv=document.getElementById("newPassword2");
    var passwordAgainDivP=document.getElementById("newPassword2").getElementsByTagName("p");
    var button = document.getElementById("button");

    if(newPassword.value!==currentPassword.value||currentPassword.value===""){
        if(newPasswordDivP[0]){
            newPasswordDiv.removeChild(newPasswordDivP[0]);
        }
    }
    else if (newPassword.value===currentPassword.value && newPasswordDivP.length===0){
        newPasswordDiv.innerHTML+="<p style='color: red'>\n" +
        " <small><i>The new password should be the different from the old!!!</i></small>\n" +
        " </p>"
        checkBox.checked=false;
    }
    if (newPassword.value===passwordAgain.value || passwordAgain.value===""){
        if(passwordAgainDivP[0]){
            passwordAgainDiv.removeChild(passwordAgainDivP[0]);
        }
    }
    else if (newPassword.value!==passwordAgain.value &&passwordAgainDivP.length===0){
        passwordAgainDiv.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input!!!</i></small>\n" +
            " </p>"
        checkBox.checked=false;
    }
    if(newPassword.value!==""&&currentPassword.value!==""&&passwordAgain.value!==""&&checkBox.checked===true&&oldPasswordDivP.length===0&&newPasswordDivP.length===0&&passwordAgainDivP.length===0){
        button.disabled=false;
    }
    else if(newPassword.value===""||currentPassword.value===""||passwordAgain.value===""||checkBox.checked===false||oldPasswordDivP.length!==0||newPasswordDivP.length!==0||passwordAgainDivP.length!==0){
        button.disabled=true;
    }

}
function modifyPassword() {
    var rightWindow = document.getElementById("rightSideWindow");
    rightWindow.innerHTML="<br>\n" +
        "            <div >\n" +
        "            <div class=\"form-group\" id='oldpassword'>\n" +
        "                <label for=\"InputCurrentPassword\" style=\"font-size: 30px\">Current Password</label>\n" +
        "                <input  style=\"background: ghostwhite\" onmouseout='passwordIsCorrect1();'type=\"password\" class=\"form-control\" id=\"InputCurrentPassword\" placeholder=\"Enter current password\" name=\"InputCurrentPassword\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\" id='newPassword'>\n" +
        "                <label for=\"InputNewPassword\" style=\"font-size: 30px\">New Password</label>\n" +
        "                <input style=\"background: ghostwhite\" onmouseout='passwordIsCorrect2();' type=\"password\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"您的密码应由6到16位大小写字母、阿拉伯数字、下划线或其它常见特殊字符组成\" class=\"form-control\" id=\"InputNewPassword\" placeholder=\"Enter new password\" name=\"InputNewPassword\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\" id='newPassword2'>\n" +
        "                <label for=\"InputNewPassword2\" style=\"font-size: 30px\">Password Confirmation</label>\n" +
        "                <input style=\"background: ghostwhite\" onmouseout=\"confirmation()\" type=\"password\" class=\"form-control\" id=\"InputNewPassword2\" placeholder=\"Enter password again\">\n" +
        "            </div>\n" +
        `<div class="checkbox" >
                    <label>
                        <input id="passwordOK" type="checkbox" onclick="finalJudge()"><h4>I remember the new password</h4>
                    </label>
                </div>`+
        "                <button  id =\"button\"  onmouseover='finalJudge()' disabled='disabled' type=\"submit\" class=\"btn btn-success  btn-lg\"  onclick=\"setNewPassword()\">Save changes</button>\n" +
        "\n" +
        "        </div>"
}