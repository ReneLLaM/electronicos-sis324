const express = require('express');
const sequelize = require('./config/database'); // Ruta correcta hacia config/database.js
const categoryRoutes = require('./controllers/categoryController'); // Ruta correcta hacia controllers/categoryController.js
const userRoutes = require('./controllers/userController'); // Ruta correcta hacia controllers/userController.js

const app = express();
const port = 3000;

app.use(express.json());

// Rutas
app.use('/categories', categoryRoutes);
app.use('/users', userRoutes);

// Sincronizar la base de datos al iniciar
sequelize.sync({ force: false })  // force: true recreará las tablas cada vez que inicies el servidor
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });
