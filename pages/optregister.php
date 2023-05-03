<?php
    include('dbconn.php');
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        //Validaciones
        $user_Register = trim($_POST['user_Register']);
        $password_Register = trim($_POST['password_Register']);
        $confPassRegister = trim($_POST['confPassRegister']);
        $usertype = trim($_POST['usertype']);
        $cash = trim($_POST['cash']);
        $totalCashEarned = trim($_POST['totalCashEarned']);
        $regdate = date("d/m/y");

        $query = "SELECT * FROM tblusers WHERE username = '$user_Register'";
        $resultado = mysqli_query($conex,$query);

        if(mysqli_num_rows($resultado)>0){ //ver cuantas rows arroja una consulta.
            mysqli_close($conex);
            exit('Nombre de usuario ya existente');
        }
        else if(strlen($user_Register) < 5 || strlen($password_Register) < 5){
            mysqli_close($conex);
            exit("Hay un dato demasiado corto.");
        }
        else if($password_Register != $confPassRegister){
            mysqli_close($conex);
            exit("Pilas! Las contraseñas no coinciden.");
        }
        else{
            $consulta = "INSERT INTO tblusers(username, pass, usertype, cash, totalcashearned, regdate) VALUES ('$user_Register','$password_Register','$usertype','$cash','$totalCashEarned','$regdate')";
            $resultado = mysqli_query($conex, $consulta);
            if($resultado){
                mysqli_close($conex);
                exit("Registro exitoso!");
            }
            else{
                mysqli_close($conex);
                exit('Algo falló en la insercion de los datos.');
            }
        }
    }
?>