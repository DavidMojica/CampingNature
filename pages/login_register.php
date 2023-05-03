<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/login_register.css">
    <link rel="stylesheet" href="../styles/text_inputs.css">
    <link rel="icon" href="https://previews.123rf.com/images/samorodinov/samorodinov1703/samorodinov170300006/73299497-plantilla-de-logotipo-de-camping-vector-para-su-dise%C3%B1o-tienda-tur%C3%ADstica-claro-del-bosque-campamento-.jpg">
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <title>Camping with nature | Login</title>
</head>
<body>
    <header id="header">
        <a href="#" class="logo">Camping with nature</a>
        <ul id="hlist">
            <li><a href="#">Home</a></li>
            <li><a href="catalog.html">Catalog</a></li>
            <li><a href="contactus.html">Contact us</a></li>
            <li id="lilogin"><a href="login_register.php">Login</a></li>
        </ul>
    </header>
    <div id="formulary">
        <div id="div_login" >
            <form action="" method="post">
                <h2>SIGN IN</h2>
                <span>Join to the adventure!</span>
                <div class="field field_v1">
                    <input class="field__input" placeholder="Username" id="user_login" name="username">
                </div>
                <div class="field field_v3">
                    <input type="password" class="field__input" placeholder="Password" id="password_Login" name="pass">
                </div>
                <div id="notify1">
                    <a href="#" class="btn_tp1" onclick=val()>Sign in</a>
                </div>
                <p>Dont have an acount yet?<a onclick=btn1Click()> <b>Create one.</b></a></p>   
            </form>
        </div>
        <div id="div_register">
            <form action="">
                <h2>Register</h2>
                <span>Start your ride!</span>
                <div class="field field_v3">
                    <input  class="field__input" placeholder="Your new username" id="user_Register" name="usernameR">
                </div>
                <div class="field field_v3">
                    <input type="password" class="field__input" placeholder="Your new password" id="password_Register" name="passR">
                </div>
                <div class="field field_v3">
                    <input type="password" class="field__input" placeholder="Confirm password" id="conf_password_Register" name="confirmpassR">
                </div>
                <div id="notify2">
                    <a href="#" class="btn_tp1" onclick=val2()>Register</a>
                </div>
                <p>Have an acount?<a onclick=btn2Click()> <b>Sign in.</b></a></p>
            </form>
        </div>  
        <div id="div_active_sesion">
            <h2>Ya has iniciado sesion.</h2>
        </div>
    </div>
</body>
<script src="../scripts/login_register.js"></script>
<script src="../scripts/class_user.js"></script>
</html>