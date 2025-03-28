# Prueba técnica

## Contexto y requerimientos:

Estamos desarrollando software para academias. Para estas la gestión de usuarios es primordial.
Las listas de usuarios son grandes y contienen muchísimos datos sobre el usuario,
por lo que deben ser muy performantes. En la prueba técnica deberás implementar la interfaz proporcionada y
usar los datos del JSON como una base de datos mockeada, este JSON esta situado en la raíz del repositorio (DB.json)

Proporcionamos en este repositorio un boilerplate con un stack similar al utilizado en Ucademy, NestJS para el backend y React para
el frontend.

Para avanzar la prueba técnica, necesitarás crear un archivo `.env` copiando el archivo `.env.example` proporcionado en el repositorio.

Para comenzar con la prueba técnica, sigue los pasos a continuación:

1. Clona el repositorio:
`git clone git@github.com:Jeff909Dev/technical-assessment.git`


2. Instala las dependencias:
`npm install`


3. Crea el contenedor de Docker con MongoDB y carga la configuración inicial:
`npm run docker`
    
- Este comando creará un contenedor de Docker con MongoDB y cargará los datos del archivo `DB.json` en la base de datos.

4. Inicia el backend:
`npm run start:backend`


5. Inicia el frontend:
`npm run start:fronted`

## Ejecución de pruebas

Opcionalmente, puedes ejecutar pruebas tanto en el backend como en el frontend utilizando los siguientes comandos:

- Para ejecutar las pruebas del frontend:
`npm run frontend:tests`


- Para ejecutar las pruebas del backend:
`npm run backend:tests`
## Enlaces:

[Interfaz de usuario](https://www.figma.com/file/n7HkjhcVD6dZISm9fu5FNG/Prueba-T%C3%A9cnica?node-id=0%3A1)

- No se proporciona una versión para dispositivos móviles pero si se implementa será valorada positivamente.
- El uso de Styled components será valorado.
- El uso de Redux / Zustand será valorado.


PD: El objetivo de la prueba es simplemente valorar las desiciones que toma el candidato a la hora de realizar la implementación. Hay muchas soluciones válidas a lo que aquí se plantea.

Happy hacking! 
:D

