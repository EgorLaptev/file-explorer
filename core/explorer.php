<?php

error_reporting('E_ALL & ~E_WARNING');

if(!isset($_POST['url'])) return 0;

$url = $_POST['url'];

$files = scandir('../' . $url);

foreach ($files as $file) {
    $json[] = ['name' => $file, 'type' => filetype('../' . $url . $file)];
}

echo json_encode($json, JSON_UNESCAPED_UNICODE);

?>
