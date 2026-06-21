import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filname = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filname);

const environment = process.env.NODE_ENV || 'developer';

dotenv.config({
    path: path.resolve(path.join(__dirname, `${environment}.env`))
}) 

const config = {
    PORT: process.env.PORT
}

export default config;