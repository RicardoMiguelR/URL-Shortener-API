import { application } from "express";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "URL-Shortener-API",
      version: "1.0.0",
      description:
        "Una pequeña API que permite registrarse, loguearse y acortar URLs de forma autenticada",
      contact: {
        name: "Ricardo Miguel Raya",
        github: "https://github.com/RicardoMiguelR",
        email: "ricardomrlj@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      responses: {
        UnauthorizedError: {
          description: "Token invalido o ausente",
          content: {
            "application/json": {
              example: {
                message: "Acceso denegado, token no proporcionado o invalido",
              },
            },
          },
        },
        NotFound: {
          description: "Recurso no encontrado",
          content: {
            "application/json": {
              example: {
                message: "URL no encontrada",
              },
            },
          },
        },
      },
      schemas: {
        User: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              example: "usuario@correo.com",
            },
            password: {
              type: "string",
              example: "123456",
            },
          },
        },
        AuthResponse: {
          type: "object",
          properties: {
            token: {
              type: "string",
              example: "eyJhbGciOiJIUzITTiIsInR5cCI6IkpXVCJ9..",
            },
            userId: {
              type: "string",
              example: "663ef81fc1174581b99d9c4e...",
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};
