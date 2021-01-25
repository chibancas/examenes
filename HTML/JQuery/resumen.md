# Resumen de Acciones en el proyecto con JQuery
La idea es realizar un **proyecto SPA** (Aplication Single Page), es decir un proyecto de una sola página html --> **index.html** . 

La idea es que las páginas **formacion.html, servicios.html, trabajos.html** ... se cargen de forma dinámica, y demanda (cuando se soliciten), en la etiqueta ```<main>``` de nuestro documento. A su vez cargaremos de forma dinámica los **formacion.css, servicios,css, trabajos.css** que formatean cada una de sus **subpaginas** correspondientes. Las subpáginas solo tendrán el contenido html específico .

Acciones a llevar a cabo:

## 1. Cargar Bootstrap y JQuery 
En esta ocasión usaremos los CDN's asociados en vez de descargarlos a nuestro proyecto.
## 2. Preparar el entorno
* Vamos a crear la carpeta html con ** formacion.html, trabajos.html, servicios.html**.
* Creamos los estilos **formacion.css, trabajos.css, servicios.css**
* En cada enlace del menú principal ponemos el **id** característico
  
        <header>
            <nav id="principal">
                <a id="trabajos">
  
* Realizamos el código en JQ que garantice que la página se ha cargado completamente
## 3. Realizar la carga de cada **subpagina.html** en la seccion ```<main>```
* Crear una función JQ para Detectar la pulsación sobre los enlaces del ```<nav id ="principal">```
* Extraer el **id** del enlace seleccionado
* Crear la variable **ruta** que contenga la ruta a la subpagina.html
* Cargar en la ```<main>``` la subpagina.html usando la función **load()**
  
  ```$("main").load(ruta);```
* Valorar y razonar en las secciones **consola** y **elements** de la **barra de desarrolladores** que está pasando ...

## 4. Cargar de forma dinámica los estilos correspondientes a las subpaginas en la sección <head>
