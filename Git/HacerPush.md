# Hacer un push en el repositorio de Clase
La idea es 
* Debemos de configurar con git config el user.name, user.email y user.password
* poder realizar un pull del repositorio
* Crear una rama local con nuestro nombre rama-usuario
* Realizar el diseño de la práctica/examen. En este proceso usaremos git status, git add, git commit de modo que vayamos añadiendo ficheros al nuevo escenario y realicemos los snapshots con git commit
* Podemos ver la evolución con git log
* Finalmente subiremos las modificaciones de los diferentes commits al repositorio de clase con git push
## Configuraciones iniciales
1. Creamos un **usuario en Github.com**, debemos de apuntar el username/email/password  
   Para hacer push en repositorio de clase hemos de facilitar nuetro **username** para que el profesor nos añada como colaboradores en el repositorio de clase  
    ![colaboradores](./img/colaboradores.png)
2. **Descargamos el repositorio de clase**. No es lo mismo que CLONAR. Nos situamos en un directorio de trabajo LMSGI y ejecutamos el siguiente comando:  
   `$ git remote add origin https://github.com/morgadodesarrollador/LMSGI.git`  
   Este origen podría cambiar:  
   `$ git remote add originRepLMSGI https://github.com/morgadodesarrollador/LMSGI.git`  
   Hacemos la siguiente comprobación:  
   * `$ git remote` 
   * `$ git remote -v`  
     ![remote](./img/remote.png)
3. Vamos a **crear una rama con tu nombre** con el objetivo de que subas tus prácticas o proyectos
   `$ git checkout -b rama-morgado`  
   Este comando provoca la creación de la rama y la selección/activación de esta  
   Ejecutamos git branch para verificar ...  
   ![brach](./img/branh.png)  

**Modificamos el proyecto** y **actualizamos el repositorio remoto** 
   1. Realizamos cambios en el código, pe:
      * creamos/modificamos la index
      * Modificamos los css para hacer el rwd ...
      * Creamos carpetas, añadimos/borramos imágenes, ficheros ...
      * Cualquier cosa
   2. Después de un cierto tiempo prudencial o cuando hemos realizado una codificación importante debemos de **crear un nuevo SNAPSHOT en nuestro repositorio LOCAL**
      * **verificar los archivos modificados**
        `$ git status`  
        Nos aparecerán todas las modificaciones (ROJO) de los ficheros desde el último commit (snapshot)  
      * Añadir esos ficheros al nuevo **STAGE o ESCENARIO**  
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
        > Posiblemente te solicite la autorización  de tu usuario git en el navegador. Esto deberás de hacerlo una sola vez. El resto de git push debes de hacerlo sin que te lo vuelva a pedir 
        ![ramas](./img/ramas.png)
