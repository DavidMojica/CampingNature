<?php
    include('dbconn.php');
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $query = "SELECT * FROM tblproduct";
        $restult = mysqli_query($conex, $query); 
        $data = mysqli_fetch_all($restult, MYSQLI_ASSOC);
        $json_data = json_encode($data);
        die($json_data);
    }
?>