<?php
date_default_timezone_set("Asia/kolkata");
$ddate = date(' d-m-Y H:i:s');

function get_client_ipsp() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}



$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['mobile_download_hidden'].' '.$_POST['mobile'];
$message=$_POST['message'];



$msg= "Name:- ".$name."\r\n"."Email:- ".$email."\r\n"."Phone:-".$phone."\r\n"."message:- ".$message."\r\n"."IP Addr:- ".get_client_ipsp();
 $headers = "From: $name <enquiry@drehomes.ae>" . "\r\n" ."BCC: leads@drehomes.ae";
mail("sales@drehomes.com",$ddate.' Enquiry from Palmiera 3 at The Oasis  AE (Brochure Form)',$msg,$headers); 



  $attr=array('status'=>'success','msg'=>'Enquiry has been submitted successfully !');

 

echo json_encode($attr);

?>