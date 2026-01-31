# 📚 API Escolar Dockerizada (Node.js + Express + MongoDB)

API REST desarrollada para la gestión de información escolar, orientada a la administración de estudiantes mediante operaciones CRUD. El proyecto fue construido con Node.js y Express, utilizando MongoDB como base de datos y Docker para la contenerización de la aplicación, garantizando portabilidad, escalabilidad y facilidad de despliegue.

Este sistema permite registrar, consultar, actualizar y eliminar estudiantes, además de realizar búsquedas avanzadas, aplicar filtros, paginación y ordenamiento. El proyecto fue desarrollado con fines académicos, siguiendo una estructura modular y buenas prácticas de desarrollo backend.

---

## 🚀 Stack Tecnológico

- Node.js + Express  
- MongoDB (Mongoose)  
- Swagger UI (Documentación de la API)  
- Docker y Docker Compose  
- dotenv y CORS  

---

## 📂 Estructura del Proyecto

El proyecto está organizado de forma modular para facilitar su mantenimiento y comprensión:

- src  
  - config: configuración de la base de datos  
  - models: definición de esquemas con Mongoose  
  - routes: rutas de la API  
  - controllers: lógica de negocio  
  - app.js: configuración principal de la aplicación  
  - server.js: arranque del servidor  

También incluye archivos clave como Dockerfile, docker-compose.yml y README.md.

---

## ⚙️ Instalación y Ejecución (Local)

### Opción 1: Ejecución sin Docker

1. Clonar el repositorio  
2. Instalar dependencias:

   npm install

3. Crear el archivo de entorno:

   cp .env.example .env

4. Configurar la variable MONGO_URI en el archivo .env  
5. Ejecutar el servidor:

   npm start

Servidor por defecto:  
http://localhost:3000

---

### 🐳 Ejecución con Docker (Recomendada)

Este proyecto utiliza Docker Compose para levantar la API y la base de datos MongoDB en contenedores separados.

1. Asegurarse de tener Docker Desktop instalado  
2. Ejecutar el siguiente comando en la raíz del proyecto:

   docker compose up --build

3. Una vez finalizado el proceso, el servidor estará disponible en:

   http://localhost:3000

Docker levanta dos contenedores principales:
- API (Node.js + Express)
- Base de datos MongoDB

---

## 📌 Endpoints Principales

- POST /api/estudiantes  
- GET /api/estudiantes  
- GET /api/estudiantes/:id  
- PUT /api/estudiantes/:id  
- DELETE /api/estudiantes/:id  

---

## 🔍 Funcionalidades Avanzadas

La API permite realizar consultas avanzadas mediante parámetros en la URL:

- Búsqueda por texto  
  /api/estudiantes?q=juan  

- Filtro por curso  
  /api/estudiantes?curso=3ro_BGU  

- Rango de promedio  
  /api/estudiantes?minProm=14&maxProm=20  

- Paginación y ordenamiento  
  /api/estudiantes?page=1&limit=10&sort=-promedio  

---

## 📖 Documentación con Swagger

La documentación interactiva de la API está disponible mediante Swagger UI y permite probar todos los endpoints directamente desde el navegador.

Acceso a la documentación:  
GET /docs

---

## ✅ Beneficios del Uso de Docker

- Entorno de ejecución estandarizado  
- Eliminación de problemas por dependencias  
- Facilidad para compartir el proyecto  
- Comunicación eficiente entre servicios  
- Despliegue rápido y reproducible  

---

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte de un trabajo académico universitario, con el objetivo de aplicar conocimientos de desarrollo backend, APIs REST, bases de datos NoSQL y contenerización. Representa una base sólida para proyectos más complejos y escalables en entornos reales.

---

## 👤 Autor

Saúl Campo  
Estudiante de Desarrollo de Software  
