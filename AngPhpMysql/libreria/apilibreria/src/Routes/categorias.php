<?php
# para agrupar las rutas en grupos
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function(RouteCollectorProxy $group){
    $group->get('/categorias', 'App\Controllers\CategoriasController:getAll');
    $group->get('/categorias/new', 'App\Controllers\CategoriasController:new');   
});
