<?php

use Slim\Factory\AppFactory;
use Slim\Exception\NotFoundException;
// cargamos el autoload para que pueda detectar el resto de las clases
require __DIR__ . '/../../vendor/autoload.php';

$containerAux = new \DI\Container();
AppFactory::setContainer($containerAux);

// creamos la aplicación php
$app = AppFactory::create();
$app->addRoutingMiddleware();
$errorMidleware = $app->addErrorMiddleware(true, true, true);

$containerAPP = $app->getContainer();

require __DIR__ . "/../Routes/libros.php";
//require __DIR__ . "/../Config/config.php";
//require __DIR__ . "/../Config/DB.php";



$app->run();