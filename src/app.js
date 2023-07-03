import express from 'express';
import morgan from 'morgan';

const app = express(); /// objeto servidor

app.use(morgan('dev')); // mensaje corto por consola

export default app; 
