<?php
# para agrupar las rutas en grupos
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function(RouteCollectorProxy $group){
    $group->get('/libros', 'App\Controllers\LibrosController:getAll');
    $group->get('/libros/new', 'App\Controllers\LibrosController:new');   
});
