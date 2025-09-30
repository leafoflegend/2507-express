import chalk from 'chalk';
import { Router } from 'express';

const numbersRouter = Router();

const numbers = [];

numbersRouter.get('/', (req, res, next) => {
    res.status(200).send({
        numbers,
    });
});

numbersRouter.post('/:number', (req, res, next) => {
    const { number: paramNumber } = req.params;

    console.log('Supplied number: ', chalk.yellow(paramNumber));

    if (!paramNumber) {
        res.status(400).send({
            error: 'No data sent with request.',
        });
    } else {
        const maybeNumber = parseInt(paramNumber);

        if (isNaN(maybeNumber)) {
            res.status(400).send({
                error: 'Number entry is not valid as number.'
            });
        } else {
            numbers.push(maybeNumber);
            res.sendStatus(201);
        }
    }
});

export default numbersRouter;
