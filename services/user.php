<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);
ini_set('html_errors', false);

$method = $_SERVER['REQUEST_METHOD'];

$frames = [
    'info' => [
        'success' => true,
        'type' => 'info',
        'datetime' => date('Y-m-d H:i:s'),
        'msg' => 'OK',
        'data' => new \stdClass(),
    ]
];

function response($data)
{
    header('Content-Type:application/json ');
    echo json_encode($data, 128);
    exit;
}
switch ($method) {
    case 'DELETE':
        $json = file_get_contents('php://input');
        $data = json_decode($json);

        $frame = $frames['info'];
        $frame['data']->result = 'Deleted successfully.';

        response($frame);
        break;
    case 'POST':
        $json = file_get_contents('php://input');
        $data = json_decode($json);

        if ($data->id === null) {
            $data->id = rand(10, 999);
        }

        $frame = $frames['info'];
        $frame['data'] = $data;
        response($frame);
        break;
}

$items = [
    [
        "id" => 1,
        "gender" => "male",
        "firstName" => "Czesław",
        "lastName" => "Olak",
        "dateOfBirth" => "1966-10-21 00:00:00",
        "email" => "colak@gmail.com",
    ],
    [
        "id" => 2,
        "gender" => "female",
        "firstName" => "Marianna",
        "lastName" => "Olak",
        "dateOfBirth" => "1974-03-14 00:00:00",
        "email" => "molak@gmail.com",
    ],
    [
        "id" => 3,
        "gender" => "male",
        "firstName" => "Piotr",
        "lastName" => "Cichacki",
        "dateOfBirth" => "1966-03-25 00:00:00",
        "email" => "piotr.cichacki@o2.pl",
    ],
    [
        "id" => 4,
        "gender" => "male",
        "firstName" => "Jan",
        "lastName" => "Walaszczyk",
        "dateOfBirth" => "1966-04-11 00:00:00",
        "email" => "walaszczyki@wp.pl",
    ],
    [
        "id" => 5,
        "gender" => "male",
        "firstName" => "Dariusz",
        "lastName" => "Wohlfart",
        "dateOfBirth" => "1966-10-07 00:00:00",
        "email" => "d.wolhfarth@gmail.de",
    ]
];

$data = [
    'success' => true,
    'type' => 'data',
    'datetime' => date('Y-m-d H:i:s'),
    'msg' => 'Users',
    'data' => [
        'items' => $items
    ],
];

response($data);
