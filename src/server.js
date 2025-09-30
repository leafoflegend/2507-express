import chalk from 'chalk';
import express from 'express';
import numbersRouter from './api/numbers.js';

const app = express();

app.use((req, res, next) => {
    console.log(`${chalk.magenta(req.ip)} ${chalk.cyan(req.path)}`);

    next();
});

app.get('/health', (req, res, next) => {
    res.status(200).send('PONG');
});

app.use('/numbers', numbersRouter);

export default app;
