<?php
    include('dbconn.php');
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $userlog = trim($_POST['userLog']);
        $passlog = trim($_POST['passLog']);

        $query = "SELECT * FROM tblusers WHERE username = '$userlog' AND pass = '$passlog'";
        $restult = mysqli_query($conex, $query); 
        if(mysqli_num_rows($restult) > 0){
            $data = mysqli_fetch_all($restult, MYSQLI_ASSOC);
            $json_data = json_encode($data);
            die($json_data);
        }
        else{
            exit("Nombre de usuario o contraseña incorrectos");
        }
    }
?>





























































                                                    