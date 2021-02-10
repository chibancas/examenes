<?php
# para agrupar las rutas en grupos
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function(RouteCollectorProxy $group){
    $group->get('/usuarios', 'App\Controllers\UsuariosController:getAll');
    $group->get('/usuarios/new', 'App\Controllers\UsuariosController:new');   
});
