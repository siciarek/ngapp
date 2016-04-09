<?php

# Sample data service:

if (rand(0, 1) < 1) {
    $type = rand(1, 4);
    switch ($type) {
        case 1:
            throw new \Exception();
            break;
        case 2:
            header('HTTP/1.0 404 Not Found');
            exit;
        case 2:
            header('HTTP/1.0 403 Forbidden');
            exit;
        default:
            echo 'Lorem ipsum dolor sit amet.';
            exit;
    }
}

$temperature = rand(5, 24);
$ok = $temperature > 10;
$description = $ok ? 'You can go fishing.' : 'You should better stay home.';

$data = [
    'success' => $ok,
    'type' => 'info',
    'datetime' => date('Y-m-d H:i:s'),
    'msg' => 'Weather Report',
    'data' => [
        'temperature' => $temperature,
        'description' => $description,
    ],
];

header('Content-Type:application/json ');
echo json_encode($data, 128);
exit;
