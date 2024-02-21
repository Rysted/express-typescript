# express-typescript
- This project consists of a basic REST API developed with Express.js and TypeScript.

## Instalación 🔧

### Instalación de dependencias.

Abre la terminal y navega hasta la carpeta del proyecto. Luego, ejecuta el siguiente comando para instalar todas las dependencias necesarias:
```
npm install
```

### Compilación del proyecto

Para compilar el proyecto y generar los archivos JavaScript:
```
npm run tsc
```

### Despliegue del proyecto 🚀

Para iniciar el proyecto y ejecutar el servidor:
```
npm run start
```

¡Listo! Ahora el proyecto está instalado, compilado y listo para ser desplegado.

## Rutas de la API 🛣️

#### Obtener todas las entradas del diario
GET /
```javascript
http://localhost:3000/api/diaries
```

#### Obtener una entrada del diario por ID
GET /:id
```javascript
http://localhost:3000/api/diaries/1
```

#### Agregar una nueva entrada al diario
POST /
```javascript
http://localhost:3000/api/diaries
```
