function postInfo() {
    let username = $("input[name='registerusername']").val(); //用户名
    let password = $("input[name='registerpassword']").val(); //密码
    let useremail = $("input[name='registeremail']").val(); //账号
    let url = 'http://localhost:3334/user/signup';
    $.ajax({
        url: `${url}`,
        type: "POST",
        data: {
            'username': `${username}`,
            'password': `${password}`,
            'useremail': `${useremail}`
        },
        success: function(data) {
            //跳转页面
            if(data.code === 0){
                //console.log()
                window.location = `http://localhost:3334/html/sendAnotherEmail.html?email=${useremail}`;
                //console.log('success')
            }else{
                 //console.log(data.msg)
                 alert(data.msg)
            }
           
        }
    });
}

function loginInfo() {
    let username = $("input[name='loginemailname']").val();
    let password = $("input[name='loginpassword']").val();
    let url = 'http://localhost:3334/user/login';
    $.ajax({
        url: `${url}`,
        type: "POST",
        data: {
            'username': `${username}`,
            'password': `${password}`
        },
        success: function(data) {
            if (data.code === 1) { //表示已经登录
                document.write("您已登录，将在五秒钟后跳转到首页.");
                setTimeout('Redirect()', 5000);
            } else if (data.code === 0) {
                //document.write(data.msg)
                setTimeout('Redirect()', 2000);
            } else {
                alert(data.msg)
                //$('#showinfo').html(data.msg); //这里显示错误信息
            }
        }
    });
}

function Redirect() //使用函数进行跳转
{
    console.log('111');
    window.location = "http://localhost:3334/html/homepage.html";
}

function intoIndex() { //进入首页，调用该函数，判断是否已经登录
    let url = 'http://localhost:3334/index';
    $.ajax({
        url: `${url}`,
        type: 'GET',
        success: function(data) {
            $('#getuser').html(data); //将数据发送到
        }
    })
}


//注销登录的函数---进行调用
function logout() {
    let url = 'http://localhost:3334/user/logout';
    $.ajax({
        url: `${url}`,
        type: 'GET',
        success: function(data) {
            //应该提示您已经注销登录---并跳转到某个页面
            $('#getuser').html(data); //将数据发送到
        }
    })
}

//忘记密码的操作
function forgetpass() {
    let email = $("input[name='forgetemail']").val();
    let url = 'http://localhost:3334/forget/password';
    $.ajax({
        url: `${url}`,
        type: 'POST',
        data: {
            'useremail': `${email}`
        },
        success: function(data) {
            //提示已经发送验证码
            if(data.code===0){
                console.log(data);
                window.location = `http://localhost:3334/html/modifyPassword.html?email=${email}`;
            }
          
        }
    })
}

//重置密码操作
function passresert() {
    let email = location.search.slice(7); 
    console.log(email)
    let password = $('#password2').val();
    let vcode = $('#vcode').val();
    console.log(vcode)
    let url = 'http://localhost:3334/forget/resert';

    $.ajax({
        url: `${url}`,
        type: 'POST',
        data: {
            'useremail': `${email}`,
            'password': `${password}`,
            'verification': `${vcode}`
        },
        success: function(data) {
            if(data.code === 0){
               console.log(data);
               alert(data.msg) 
               window.location = `http://localhost:3334/html/login.html`;
            }else{
                alert(data.msg)
            }
            
        }
    })
}


function againEmail(){  //再次发送验证
    let email = location.search.slice(7);
    console.log(email)
    let url = `http://localhost:3334/user/againemail?email=${email}`;
    $.ajax({
        url: `${url}`,
        type: 'POST',
        data:{
            'useremail': `${email}`
        },
        success:function(data){
            console.log(data);
        }
    });
}

//keypress
function keyPress(){
    let username = $("input[name='registerusername']").val(); //用户名
    let url = `http://localhost:3334/user/signup/username`;
    $.ajax({
        url: `${url}`,
        type: 'POST',
        data:{
            'username': `${username}`
        },
        success:function(data){
            console.log(data.msg);
        }
    });
}