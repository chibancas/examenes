# Hacer un push en el repositorio de Clase
La idea es 
* Debemos de configurar con git config el user.name, user.email y user.password
* poder realizar un pull del repositorio
* Crear una rama local con nuestro nombre rama-usuario
* Realizar el diseño de la práctica/examen. En este proceso usaremos git status, git add, git commit de modo que vayamos añadiendo ficheros al nuevo escenario y realicemos los snapshots con git commit
* Podemos ver la evolución con git log
* Finalmente subiremos las modificaciones de los diferentes commits al repositorio de clase con git push
## Configuraciones iniciales
1. Creamos un usuario en Github.com, debemos de apuntar el username/email/password  
   Para hacer push en repositorio de clase hemos de facilitar nuetro **username** para que el profesor nos añada como colaboradores en el repositorio de clase
2. Descargamos el repositorio de clase. Nos situamos en un directorio de trabajo LMSGI y ejecutamos el siguiente comando:  
   `$ git remote add origin https://github.com/morgadodesarrollador/LMSGI.git`  
   Este origen podría cambiar:  
   `$ git remote add originRepLMSGI https://github.com/morgadodesarrollador/LMSGI.git`  
   Hacemos la siguiente comprobación:  
   * `$ git remote` 
   * `$ git remote -v`  
     ![remote](./img/remote.png)
3. Vamos a crear una rama con tu nombre con el objetivo de que subas tus prácticas o proyectos
   `$ git checkout -b rama-morgado`  
   Este comando provoca la creación de la rama y la selección/activación de esta  
   Ejecutamos git branch para verificar ...
   ![brach](./img/branch.png)
4. Modificamos el proyecto 
   1. Realizamos cambios en el código, pe:
      * creamos/modificamos la index
      * Modificamos los css para hacer el rwd ...
      * Creamos carpetas, añadimos/borramos imágenes, ficheros ...
      * Cualquier cosa
   2. Después de un cierto tiempo prudencial o cuando hemos realizado una codificación importante debemos de crear un nuevo snapshot **en nuestro repositorio LOCAL**
      * **verificar los archivos modificados**
        `$ git status`  
        Nos aparecerán todas las modificaciones (ROJO) de los ficheros desde el último commit (snapshot)  
      * Añadir esos fichero al nuevo **STAGE o ESCENARIO**  
        `$ git add -A .`
      * Nos aparecerán todas las modificaciones en el nuevo ESCENARIO (VERDE)
        `$ git status`
        ![statusOK](./img/statusOK.png)
      * Realizaremos el nuevo **SNAPSHOT** de nuestro proyecto
        Si hemos realizado una nueva funcionalidad le damos una nueva etiqueta al commit
        `$ git commit -m "mensaje descriptivo del nuevo estado (modificaciones realizadas)"`  
        ![commit](./img/commit.png)
        Si deseamos grabar los datos simplemente realizamos el commit con la misma etiqueta
    3. Cuando sea preciso realizamos la actualización del **repositorio REMOTO**
      * `$ git push origin rama-morgado` 
        ![push](./img/push.png)
        
        ![ramas](./img/ramas.png)
