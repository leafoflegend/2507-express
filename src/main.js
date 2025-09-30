import chalk from 'chalk';
import app from './server.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(chalk.cyan(`Server is now listening on PORT:${PORT}`));
});
