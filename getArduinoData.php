<?php 
    require("utils.php");
    require("config.php");
    //$result = $firebase->get('teste2');

    //$result = getData('temperatura');
    //print_r($result);

    if (isset($_REQUEST)){
        //print_r($_GET);
        //$data = Array("key" => "value");
        foreach ($_REQUEST as  $key => $value){
            $time = time();
            switch($key){
                case UMIDADE_AR:
                    $data[UMIDADE_AR] = $value;
                break;
                case UMIDADE_TERRA:
                    //array_push($data, UMIDADE_TERRA, $value);
                    $data[UMIDADE_TERRA] = $value;
                break;
                case TEMPERATURA:
                    //array_push($data, TEMPERATURA,  $value);
                    $data[TEMPERATURA] = $value;
                break;
                case LUMINOSIDADE:
                    //array_push($data, TEMPERATURA,  $value);
                    $data[LUMINOSIDADE] = $value;
                break;
                default:
                    die("Dado invalido");
            }
        }

        $firebase -> update([
            "data" => $data,
        ], 'dados/'.$time);

        $firebase -> update([
            "lastUpdate" => $time,
        ], '/');
    }

?>