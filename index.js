import app from './app/server.js';

app.listen(app.get('PORT'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('PORT')}`);
})