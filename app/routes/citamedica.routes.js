import {Router} from 'express';

const route = Router();

route.get('/', (req, res) => {
    res.json({"Nombre": "Mariana"});
});
route.post('/', (req, res) => {
    res.json({"Nombre": "Mariana"});
});
route.delete('/', (req, res) => {
    res.json({"Nombre": "Mariana"});
});
route.patch('/', (req, res) => {
    res.json({"Nombre": "Mariana"});
});

export default route;