export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "URL-Shortener-API",
      version: "1.0.0",
      description:
        "Una pequeña API que permite registrarse, loguearse y acortar URLs de forma autenticada",
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
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};
