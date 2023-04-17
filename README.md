# Cuidado de mascotas.

Si eres un amante de las mascotas, sabes lo importante que es asegurarte de que tus animales reciban el cuidado y la atención que merecen. Sin embargo, a veces puede ser difícil encontrar el tiempo para hacerlo todo, especialmente si vives en un condominio y tienes un horario ocupado.

Es por eso que ofrecemos un servicio de cuidado de mascotas para condominios. Nos encargamos de alimentar, pasear y brindar atención a tus mascotas mientras estás fuera. Nuestros cuidadores están altamente capacitados y tienen una gran experiencia en el cuidado de mascotas, lo que significa que puedes estar seguro de que tus animales estarán en las mejores manos.

Ya sea que necesites que cuidemos de tu perro, gato u otro tipo de mascota, estamos aquí para ayudarte. Nos tomamos muy en serio nuestra responsabilidad de cuidar de tus animales, y nos aseguramos de que estén cómodos, felices y seguros en todo momento.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Inicialización 

El archivo .env debe contener los siguientes parametros:

- PORT:3001
- DB:BASE DE DATOS NO RELACIONAL A UTILIZAR


### Subida a servidor

## **Acceder al servidor mediante ssh**
Para acceder al servidor se debe ingresar el siguiente comando en la terminal:
```
ssh [usuario]@146.83.198.35 -p [Puerto 22 de las credenciales que se les entregaron]
```

Cuando hayan utilizado ese comando les aparecera un mensaje en terminal y deberan escribir ``Yes``, posteriormente debera ingresar la contraseña que se les entregó.

## **Servidor de producción**
Es importante considerar que para el funcionamiento correcto del proyecto deben estar corriendo los proyectos en diferentes servidores donde deberan realizarse los pasos de instalación de dependencias y configuración de variables de entorno.

Para configurar el servidor de producción se debe seguir los siguientes pasos en ambos servidores, frontend y backend:


Iniciar el modo root e ingresar las credenciales de administrador del servidor
```bash
sudo su
```

Actualizar el sistema operativo
```bash
apt-get update
```

Instalar curl para descargar paquetes
```bash
apt-get install -y curl
```

Instalar autoclean para limpiar el sistema
```bash
apt-get -y autoclean
```

Instalar git para clonar el repositorio
```bash
apt-get install git
```

Instalar nano para editar archivos
```bash
apt-get install nano
```

Instalar nvm para instalar NodeJS
```bash
curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
```
Reiniciar bash para que se puedan utilizar comandos de NVM

```bash
exec bash
```

Instalar version 16.15.0 de NodeJS
```bash
nvm install 16.15.0
```
Cambiar alias de NodeJS
```bash
nvm alias default 16.15.0
```
Cambiar la version de NodeJS
```bash
nvm use default
```

Instalar yarn para instalar dependencias y pm2 para correr la aplicación
```bash
npm install -g yarn
npm install -g pm2
```

Clonar el repositorio del proyecto como se menciona en el apartado "Clonación del repositorio"


Luego de haber clonado el repositorio se debe mover hacia la carpeta raiz del proyecto, para esto se debe ejecutar el siguiente comando:

```bash
cd [Proyecto]
```

### **Instalar dependencias del proyecto ambiente de producción**

Si se encuentra en la carpeta raiz del proyecto y desea instalar las dependencias, se debe ejecutar el siguiente comando:

```bash
yarn install
```

Para poder ejecutar el proyecto se debe generar el .env en la carpeta raiz del proyecto, el cual debe contener las variables mencionadas anteriormente dependiendo de cual de los proyectos este corriendo, el frontend o el backend. Para generar el .env mediante terminal se debe ejecutar el siguiente comando:

```bash
touch .env
```

Para modificar el archivo .env se debe ejecutar el siguiente comando:

```bash
nano .env
```

Para ejecutar el proyecto se debe ejecutar el siguiente comando en la terminal:

```bash
pm2 start yarn -- dev
```
