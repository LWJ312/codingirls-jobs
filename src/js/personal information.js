function WhetherBan() {
    var infoCheckBox = document.getElementById("personalInfoCheckBox").getElementsByTagName("input");
    var button = document.getElementById("button");
    if (infoCheckBox[0].checked === false) {
        button.disabled = true;
    }
    else if (infoCheckBox[0].checked === true) {
        button.disabled = false;
    }
    return;
}
function modifyPersonalInfo() {
    var rightWindow = document.getElementById("rightSideWindow");
    rightWindow.innerHTML="<br>\n" +
        "            <div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputcompanyName\" style=\"font-size: 30px\">Company Name</label>\n" +
        "                <input style=\"background: ghostwhite\" type=\"text\" class=\"form-control\" id=\"InputcompanyName\" placeholder=\"Enter company name\" name=\"InputcompanyName\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputcompanyAddress\" style=\"font-size: 30px\">Company Address</label>\n" +
        "                <input style=\"background: ghostwhite\" type=\"text\" class=\"form-control\" id=\"InputcompanyAddress\" placeholder=\"Enter company address\" name=\"InputcompanyAddress\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputcompanyKind\" style=\"font-size: 30px\">Company Kind</label>\n" +
        "                <input style=\"background: ghostwhite\" type=\"text\" class=\"form-control\" id=\"InputcompanyKind\" placeholder=\"Enter company kind\" name=\"InputcompanyKind\">\n" +
        "            </div>\n" +
        "            <div class=\"checkbox\" id=\"personalInfoCheckBox\">\n" +
        "                <label>\n" +
        "                    <input type=\"checkbox\" onchange=\"WhetherBan()\"> <h4>OK</h4>\n" +
        "                </label>\n" +
        "            </div>\n" +
        "                <button  id =\"button\" type=\"submit\" class=\"btn btn-success  btn-lg\" disabled=\"disabled\" onclick=\"postUserDetail()\">Save changes</button>\n" +
        "\n" +
        "        </div>"
    getUserDetail();
}