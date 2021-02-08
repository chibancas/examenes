<?php
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Slim\Factory\AppFactory;
    require_once '../vendor/autoload.php';
    //$config = require 'app/config/config.php';

   // Instanciamos la aplicación.
    $app = new \Slim\App;
    //$app = AppFactory::create();
    echo "hola mundo";
    $app->group('/admin', function () use ($app) {
        $app->post('/register', 'newUser');
    });
    
    function newUser(Request $request, Response $response){
        $campos = $request->getParsedBody();
        $nombre = $campos['nombre'];
        $datos = array('nombre' => $nombre);
        $respuesta = array('status' => 'ok', 'data' => $datos);
        
        $response->getBody()->write(json_encode($respuesta));
        return $response
          ->withHeader('Content-Type', 'application/json')
          ->withStatus(201);
    }


  // Creamos la ruta por defecto
    $app->get('/hola/{nombre}', function (Request $request, Response $response, array $args) {
        $nombre = $args['nombre'];
        //$response->getBody()->write("El framework Slim funciona ! $nombre");
        $payload=[];
        array_push($payload, array("name"=>"Bob"  ,"birth-year"=>1993));
        array_push($payload, array("name"=>"Alice","birth-year"=>1995));
        return $response->withJson($payload,200);
    });

// Ejecutamos la aplicación.
$app->run();
?>
