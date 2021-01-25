# Resumen de Acciones en el proyecto con JQuery
La idea es realizar un **proyecto SPA** (Aplication Single Page), es decir un proyecto de una sola página html --> **index.html** . 

La idea es que las páginas **formacion.html, servicios.html, trabajos.html** ... se cargen de forma dinámica, y demanda (cuando se soliciten), en la etiqueta ```<main>``` de nuestro documento. A su vez cargaremos de forma dinámica los **formacion.css, servicios,css, trabajos.css** que formatean cada una de sus **subpaginas** correspondientes. Las subpáginas solo tendrán el contenido html específico .

Partimos del proyecto [CaronteSistemas](https://github.com/morgadodesarrollador/LMSGI/tree/master/HTML/RWD/4-CaronteSistemas)

Acciones a llevar a cabo:

## 1. Cargar Bootstrap y JQuery 
En esta ocasión usaremos los CDN's asociados en vez de descargarlos a nuestro proyecto.
## 2. Preparar el entorno
* Vamos a crear la carpeta html con **formacion.html, trabajos.html, servicios.html**.
* Cargar **imágenes** en las subpáginas y **valorar la ruta a la imagen**, entendiendo que es **SPA**. 
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

## 4. Cargar de forma dinámica los estilos correspondientes a las subpaginas en la sección ```<head>```
* **valorar la ruta a LOS ESTILOS**, entendiendo que es **SPA**. 

## 5. Solucionar la sección home

Una vez que se carga cualquier subpágina en el ```<main>``` el contenido inicial se pierde y ya no se puede recuperar. La idea es crear una **home.html** que contenga el contenido inicial de la ```<main>``` y hacerlo dinámico pero que se carge al inicio.

## 6. Crear la clase 'active' sobre el enlace seleccionado

Cada vez que se pulse (click) en el enlace añadiremos dinámicamente la clase **active** al enlace y elimaremos la dicha clase del enlace clickeado anteriormente.

## 7. Aparecer/desparecer el menú principal en la versión móvil

Cada vez que pusemos en el **navicon** mostraremos/ocultaremos el menú principal a través del efecto **slideToggle** que hará el efecto de persiana.

## 8. Aplicar el RWD a los estilos de las subpáginas 

Usaremos las MediaQuierys dentro de cada estilo.css, usando las reglas compatibles con las marcadas en la **index.html** y solo afectando al html asociado.

En este apartado usaremos **FlexBox** pero podemos usar **GridLayout**. En caso de usar **Bootstrap** pondremos en las subpáginas.html los breakpoints ppertinentes **xs, md, lg...** 
