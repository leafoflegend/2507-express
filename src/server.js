import chalk from 'chalk';
import express from 'express';
import numbersRouter from './api/numbers.js';
import pokemonRouter from './api/pokemon.js';

const app = express();

// VERY IMPORTANT LINE
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${chalk.magenta(req.ip)} ${chalk.yellow(req.method)} ${chalk.cyan(req.originalUrl)}`);

    next();
});

app.get('/health', (req, res, next) => {
    res.status(200).send('PONG');
});

app.use('/numbers', numbersRouter);
app.use('/pokemon', pokemonRouter);

app.use((req, res, next) => {
    console.log(chalk.yellow(`Route not found: ${req.originalUrl}`));

    res.status(404).send(`
<html>
    <head>
        <title>Page Not Found</title>
    </head>
    <body>
        <h1>404: Page Not Found</h1>
    </body>
</html>
    `);
});

export default app;
