<?php

if(!isset($_POST['url'])) return 0;

$url = $_POST['url'];

echo json_encode(scandir('../' . $url), JSON_UNESCAPED_UNICODE);

?>
