import app from './app/server.js';

app.listen(app.get('PORT'), (err) => {
    if (err) {
        console.error(`Error al iniciar el servidor: ${err.message}`);
        process.exit(1);
    }
    console.log(`Servidor corriendo en el puerto ${app.get('PORT')}`);
});