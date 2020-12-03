# Hacer un push en el repositorio de Clase
La idea es 
* Debemos de configurar con git config el user.name, user.email y user.password
* poder realizar un pull del repositorio
* Crear una rama local con nuestro nombre rama-usuario
* Realizar el diseño de la práctica/examen. En este proceso usaremos git status, git add, git commit de modo que vayamos añadiendo ficheros al nuevo escenario y realicemos los snapshots con git commit
* Podemos ver la evolución con git log
* Finalmente subiremos las modificaciones de los diferentes commits al repositorio de clase con git push
## Configuraciones iniciales
1. ###Creamos un **usuario en Github.com**, 
   Debemos de apuntar el username/email/password  
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
   Como nuestro repositorio local está vacío, vamos a crear la rama **master** en nuestro **repositorio local**. Hacemos:  
    `$ git checkout -b master`  
    verificamos que la rama ha sido creada y es activa: 
     `$ git branch`  
      ![remote](./img/brachmaster.png)

3. Nos descargamos la **rama master** del repositorio de GitHub indicado en **origin** a la **rama-master** de nuestro **repositorio local** en nuestro ordenador:  
    `$ git pull origin master`  
4. Vamos a **crear una rama con tu nombre** con el objetivo de que subas tus prácticas o proyectos
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
**Descargar Actualizaciones del master** y **actualizamos el repositorio local** 
    1. Vemos las ramas con `$ git branch` y con `$ git checkout master` cambiamos a la **rama master** del repositorio local.  
        ![branchMaster](./img/branchmaster.png)  
        ![vscodemaster](./img/vscodehmaster.png)  
      Podemos comprobar que al cambiar de ramma, se da el DESASTRE, Y ocurren 2 cosas en VSCODE:  
      * Abajo a la derecha cambia a rama **master**.
      * Desaparece de VSCODE el código desarrollado por nosotros en nuestra rama **rama-morgado**
    2. Descargamos la rama **master** de origen a la **rama activa** de nuestro repositorio local, que es la master.  
      `$git pull origin master`  
      Esto produce la descarga  de las actualizaciones de la **rama master del repositorio remoto** en la **rama master del repositorio local**  
    3. Vemos como en VSCODE aparece las actualizacioens desscargadas. 
    4. Cambiamos de la rama master a la rama nuestra. `$git checkout rama-morgado` y verificamos.
       Vemos como se produce el MILAGRO, se cambia a rama-morgado en VSCODE, y se ACTUALIZA NUESTRO CÓDIGO EN VSCODE.
    5. Podemos permutar y volver a master para ver las acutualizaciones ...
    6. Podemos cambiar de rama solo si en la rama hemos realziado un commit, hasta que no hagamos el commit no podremos cambiar de rama.
**Descargar otras ramas del repositorio remoto** 
    1. En el repositorio local creamos la rama que deseo descargar, pe:el código de un compañero en su rama.  
       `$git checkout -b rama-compañero`  
    2. verificamos el cambio y Descargarmos el código
       `$git pull origin rama-compañero`