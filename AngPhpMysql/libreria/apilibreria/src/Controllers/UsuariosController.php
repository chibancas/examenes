<?php
    namespace App\Controllers;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;

    class UsuariosController {
    
        public function new(Request  $request, Response $response, $args){
            $response->getBody()->write("Insertar una nuevo Usuario");
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
        }
       
        public function getAll($request, $response, $args){
            $response->getBody()->write("Listado de Usuarios");
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(200);
            }
    }