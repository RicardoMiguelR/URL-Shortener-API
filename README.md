# URL Shortener - API REST 🚀

## Acortador de URLs con Autenticación 🔗

![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black)
![bcrypt](https://img.shields.io/badge/bcrypt-004880?style=flat)
![dotenv](https://img.shields.io/badge/dotenv-8DD6F9?style=flat)
![nanoid](https://img.shields.io/badge/nanoid-3CB371?style=flat)

Este proyecto es una API construida con **Node.js**, **Express** y **MongoDB Atlas** que permite:

- Registro y login de usuarios con JWT
- Acortar URLs autenticado
- Redirigir usando un enlace corto
- Obtener todas tus URLs acortadas
- Documentación completa con Swagger UI

> ✨ Implementa seguridad, middleware, arquitectura MVC, validación y documentación profesional.

---

### 🧰 Tecnologías usadas

- Node.js + Express
- MongoDB Atlas + Mongoose
- JSON Web Tokens (JWT)
- Swagger (Documentación de la API)
- bcrypt (encriptación de contraseñas)
- dotenv
- nanoid

---

### 📦 Instalación

Clona el repositorio y navega dentro del proyecto:

```bash
git clone https://github.com/tu-usuario/url-shortener-api.git
cd url-shortener-api
```

---

Instala las dependencias:

```bash
npm install
```

---

### ⚙️ Configuración

Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```bash
PORT=4000
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/dbname
JWT_SECRET=unaClaveSecreta
BASE_URL=http://localhost:4000
```

---

### ▶️ Ejecutar el servidor

```bash
npm run dev
```

**El servidor iniciará en: http://localhost:4000**

---

📬 Rutas principales:
Método --- Ruta --- Descripción --- Protegida
POST --- /api/auth/register --- Registrar nuevo usuario --- ❌
POST --- /api/auth/login --- Login de usuario y obtener token --- ❌
POST --- /api/url/shorten --- Acortar una URL --- ✅
GET --- /api/url --- Obtener tus URLs acortadas --- ✅
GET --- /:shortId --- Redirigir a la URL original --- ❌

**✅ = requiere token Bearer en headers**

---

### 📝 Codigo para actualizar el proyecto:

```bash
git status
git add .
git commit -m "Mensaje del commit"
git push origin <rama o sub-rama a la cual seran subidos los cambios>
```

---

### 🧪 Probar la API con Postman

- Regístrate o logueate en /api/auth/\*
- Copia el token JWT de la respuesta.
- En una nueva request (por ejemplo POST a /api/url/shorten), agrega el token en los headers:

Authorization: Bearer TOKEN

Ejemplo de body:

```json
{
  "originalUrl": "https://www.ejemplo.com"
}
```

---

### 📬 Colección de Postman

Para facilitar el testeo de los endpoints, puedes importar esta colección de Postman:  
👉 [Colección pública de Postman](https://www.postman.com/your-workspace/collections/your-collection-id)

> Incluye todas las rutas de autenticación, acortado de URLs y redirección, ya configuradas con variables y ejemplos.

---

### 🧪 Ejemplos de uso

🔐 Login con `curl`

```bash
curl -X POST https://url-shortener-api-x98v.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@ejemplo.com",
    "password": "tu_contraseña"
  }'
```

---

### 🔗 Acortar una URL con curl

```bash
curl -X POST https://url-shortener-api-x98v.onrender.com/api/url/shorten \
  -H "Authorization: Bearer TU_TOKEN_JWT" \
  -H "Content-Type: application/json" \
  -d '{
    "originalUrl": "https://www.google.com"
  }'
```

---

### 📦 Acortar una URL con fetch en JavaScript

```bash
const shortenUrl = async () => {
  const res = await fetch("https://url-shortener-api-x98v.onrender.com/api/url/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer TU_TOKEN_JWT",
    },
    body: JSON.stringify({ originalUrl: "https://www.google.com" }),
  });

  const data = await res.json();
  console.log(data);
};

shortenUrl();
```

---

### 🚀 API Deploy en Render

La API está desplegada en:  
🔗 [https://url-shortener-api-x98v.onrender.com](https://url-shortener-api-x98v.onrender.com)

---

### 📚 Documentación de API con Swagger

Puedes acceder a la documentación completa de la API aquí:  
📝 [https://url-shortener-api-x98v.onrender.com/api-docs](https://url-shortener-api-x98v.onrender.com/api-docs)

>![N|Solid](https://raw.githubusercontent.com/RicardoMiguelR/URL-Shortener-API/refs/heads/main/assets/img/preview-docs.png)

---

### 📦 Rutas principales

🔐 Autenticación

- `POST /api/auth/register` – Registra un nuevo usuario.
- `POST /api/auth/login` – Inicia sesión y devuelve un token JWT.

🔗 URLs

- `POST /api/url/shorten` – Crea una URL acortada (requiere token).
- `GET /:shortId` – Redirige a la URL original usando el shortId.
- `GET /api/url` – Devuelve todas las URLs del usuario autenticado (requiere token).

---

### ✨ Autor

Desarrollado por Ricardo Miguel Raya

💼 [LinkedIn](https://www.linkedin.com/in/ricardo-miguel-raya/)
💻 [GitHub](https://github.com/RicardoMiguelR)

---

### 📌 Licencia

Este proyecto está bajo la Licencia MIT.
