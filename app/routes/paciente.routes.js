import {Router} from 'express';

const route = Router();

route.get('/', (req, res) => {
    res.json({"Nombre": "CARLOS"});
});
route.post('/', (req, res) => {
    res.json({"Nombre": "CARLOS"});
});
route.delete('/', (req, res) => {
    res.json({"Nombre": "CARLOS"});
});
route.patch('/', (req, res) => {
    res.json({"Nombre": "CARLOS"});
});

export default route;