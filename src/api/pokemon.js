import chalk from 'chalk';
import { Router } from 'express';

const pokemonRouter = Router();

const pokedex = {};

pokemonRouter.get('/', (req, res, next) => {
    res.status(200).send({
        pokedex,
    });
});

pokemonRouter.post('/', (req, res, next) => {
    if (!req.body) {
        res.sendStatus(400);
    } else {
        const { name, type: pokemonType, weight, height, defaultMove } = req.body;

        if (!name || !pokemonType || !weight || !height || !defaultMove) {
            res.sendStatus(400);
        } else {
            if (pokedex[name]) {
                res.sendStatus(409);
            } else {
                pokedex[name] = {
                    name,
                    type: pokemonType,
                    weight,
                    height,
                    defaultMove,
                };
                res.status(201).send({
                    message: `Created new pokemon with name "${name}"`,
                });
            }
        }
    }
});

export default pokemonRouter;